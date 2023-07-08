<template>
  <q-page class="tw-p-4 tw-space-y-6">
    <div class="tw-text-xl tw-font-semibold">User</div>
    <q-table
      color="primary"
      :columns="columns"
      :rows="rows"
      :loading="loading"
      :filter="search"
      :pagination="{ rowsPerPage: 10 }"
      flat
    >
      <template #top>
        <div class="tw-flex tw-justify-between tw-w-full">
          <q-btn outline no-caps color="primary" @click="openDialog(null)">
            <vx-icon iconName="AddCircle" class="tw-mr-2" :size="20" />
            Create New
          </q-btn>
          <q-input dense placeholder="Search..." v-model="search" filled>
            <template #prepend>
              <vx-icon iconName="SearchStatus" :size="20" />
            </template>
          </q-input>
        </div>
      </template>
      <template #body-cell-index="props">
        <q-td :props="props">
          {{ props.rowIndex + 1 }}
        </q-td>
      </template>
      <template #body-cell-action="props">
        <q-td :props="props">
          <q-btn flat dense size="sm" color="primary">
            <vx-icon iconName="More" :size="18" />
            <q-menu auto-close class="tw-shadow-none tw-border">
              <q-list style="min-width: 100px">
                <q-item
                  clickable
                  v-ripple
                  class="text-primary"
                  @click="openDialog(props.row)"
                >
                  <q-item-section avatar>
                    <vx-icon iconName="Edit" :size="20" />
                  </q-item-section>

                  <q-item-section>Edit</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  v-ripple
                  class="text-negative"
                  @click="confirmDelete(props.row.id)"
                >
                  <q-item-section avatar>
                    <vx-icon iconName="Trash" :size="20" />
                  </q-item-section>

                  <q-item-section>Delete</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
  <q-dialog v-model="form_dialog">
    <q-card style="min-width: 600px">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ !is_edit ? "Create" : "Edit" }} User</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>

      <q-form @submit.prevent="submit">
        <q-card-section class="tw-grid tw-grid-cols-6 tw-gap-x-4 tw-gap-y-2">
          <q-input
            v-model="form.username"
            filled
            class="tw-col-span-3"
            label="Username"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            v-model="form.name"
            filled
            class="tw-col-span-3"
            label="Name"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-select
            v-model="form.role"
            filled
            class="tw-col-span-2"
            label="Role"
            :options="['Admin', 'Kasir', 'Manager', 'Kurir']"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-select
            v-model="form.jenis_kelamin"
            filled
            class="tw-col-span-2"
            label="Gender"
            :options="['Laki-Laki', 'Perempuan']"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            v-model="form.phone_number"
            filled
            class="tw-col-span-2"
            label="No Telp"
            mask="###################"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            v-if="!is_edit"
            v-model="form.password"
            type="password"
            filled
            class="tw-col-span-3"
            label="Password"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            v-else
            v-model="form.password"
            type="password"
            filled
            class="tw-col-span-3"
            label="Password"
          />
          <q-input
            v-model="form.confirm_password"
            :disable="form.password == null"
            type="password"
            filled
            class="tw-col-span-3"
            label="Confirm Password"
            :rules="[
              (val) => val === form.password || 'Confirm password tidak sama',
            ]"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Cancel"
            no-caps
            flat
            @click="closeDialog"
            color="negative"
          />
          <q-btn
            label="Submit"
            :loading="loading"
            type="submit"
            no-caps
            flat
            color="primary"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-negative tw-flex tw-items-center">
          <VxIcon iconName="Warning2" class="tw-mr-2" :size="22" />
          Confirmation
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are you sure want to delete this data?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" no-caps v-close-popup />
        <q-btn flat label="Yes" color="negative" no-caps @click="deleteData" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import VxIcon from "components/VxIcon.vue";
import moment from "moment";
const columns = [
  {
    name: "index",
    label: "#",
    align: "center",
  },
  {
    name: "Name",
    label: "Nama",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "Username",
    label: "Username",
    align: "left",
    field: "username",
    sortable: true,
  },
  {
    name: "Role",
    label: "Role",
    align: "left",
    field: "role",
    sortable: true,
  },
  {
    name: "PhoneNumber",
    label: "No Telp",
    align: "left",
    field: "phone_number",
    sortable: true,
  },
  {
    name: "PhoneNumber",
    label: "Gender",
    align: "left",
    field: "jenis_kelamin",
    sortable: true,
  },
  {
    name: "Created",
    label: "Created By",
    align: "left",
    field: (row) => row.user_create?.name,
    sortable: true,
  },
  {
    name: "Updated",
    label: "Updated At",
    align: "left",
    field: (row) => moment(row.updated_at).format("YYYY-MM-DD hh:mm:ss"),
    sortable: true,
  },
  {
    name: "action",
    label: "Action",
    align: "right",
  },
];

const initial_form = {
  username: null,
  name: null,
  role: null,
  phone_number: null,
  jenis_kelamin: null,
  password: null,
  confirm_password: null,
};

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    return {
      columns,
      rows: ref([]),
      loading: ref(false),
      search: ref(""),
      is_edit: ref(false),
      confirm: ref(false),

      form_dialog: ref(false),
      id: ref(""),
      form: ref(structuredClone(initial_form)),
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$api
        .get("/users")
        .then((res) => {
          this.rows = res.data.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openDialog(data) {
      if (!data) {
        this.form = { ...initial_form };
        this.is_edit = false;
      } else {
        this.is_edit = true;
        this.id = data.id;
        delete data.password;
        this.form = { ...data };
      }
      this.form_dialog = true;
    },
    closeDialog() {
      this.form = { ...initial_form };
      this.form_dialog = false;
      this.loading = false;
    },
    submit() {
      this.loading = true;
      if (!this.is_edit) {
        this.$api
          .post("/users", { ...this.form, created_by: this.user.id })
          .then((res) => {
            this.$q.notify({
              message: "User successfully created",
              color: "positive",
            });
            this.closeDialog();
            this.getData();
          })
          .catch((err) => {
            this.closeDialog();
            console.log(err);
          });
      } else {
        this.$api
          .put("/users/" + this.id, {
            ...this.form,
            updated_by: this.user.id,
          })
          .then((res) => {
            this.$q.notify({
              message: "User successfully updated",
              color: "positive",
            });
            this.closeDialog();
            this.getData();
          })
          .catch((err) => {
            this.closeDialog();
            console.log(err);
          });
      }
    },
    confirmDelete(id) {
      this.id = id;
      this.confirm = true;
    },
    deleteData() {
      this.$api
        .delete("/users/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "User successfully deleted",
            color: "positive",
          });
          this.getData();
          this.confirm = false;
        })
        .catch((err) => {
          console.log(err);
          this.confirm = false;
        });
    },
  },
});
</script>
