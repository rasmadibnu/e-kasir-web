<template>
  <q-page class="tw-p-4 tw-space-y-6">
    <div class="tw-text-xl tw-font-semibold">Produk</div>
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
        <div class="text-h6">{{ !is_edit ? "Create" : "Edit" }} Produk</div>
        <q-space />
        <q-btn flat round dense v-close-popup>
          <vx-icon iconName="CloseCircle" :size="20" />
        </q-btn>
      </q-card-section>

      <q-form @submit.prevent="submit">
        <q-card-section class="tw-grid tw-grid-cols-6 tw-gap-x-4 tw-gap-y-2">
          <div
            class="tw-col-span-6 tw-w-full tw-border tw-mb-2 tw-rounded tw-py-4 tw-cursor-pointer"
            @click="$refs.file.pickFiles()"
          >
            <q-img
              v-if="!src"
              src="~assets/undraw_images.svg"
              style="height: 200px"
              fit="contain"
            />
            <q-img v-else :src="src" style="min-height: 200px" fit="fit" />
          </div>

          <q-file
            v-if="!is_edit"
            filled
            label="Image"
            accept="image/jpeg,.png"
            ref="file"
            class="tw-col-span-6"
            v-model="form.file"
            :rules="[(val) => !!val || 'This field is required']"
            clearable
            @update:model-value="onFilePicked"
          >
            <template #append>
              <q-icon name="attachment" />
            </template>
          </q-file>
          <q-file
            v-else
            filled
            label="Image"
            accept="image/jpeg,.png"
            ref="file"
            class="tw-col-span-6"
            v-model="form.file"
            clearable
            @update:model-value="onFilePicked"
            :hint="form.image.split('\\')[1]"
          >
            <template #append>
              <q-icon name="attachment" />
            </template>
          </q-file>
          <q-input
            v-model="form.name"
            filled
            label="Nama"
            class="tw-col-span-3"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            v-model="form.deskripsi"
            filled
            label="Deskripsi"
            class="tw-col-span-3"
          />
          <q-select
            :options="kategori"
            map-options
            emit-value
            v-model="form.kategori_id"
            filled
            label="Kategori"
            :rules="[(val) => !!val || 'This field is required']"
            class="tw-col-span-3"
          />
          <q-select
            :options="supplier"
            map-options
            emit-value
            v-model="form.supplier_id"
            filled
            label="Supplier"
            :rules="[(val) => !!val || 'This field is required']"
            class="tw-col-span-3"
          />
          <q-input
            v-if="!is_edit"
            v-model="form.stok"
            filled
            label="Stok"
            mask="#"
            reverse-fill-mask
            :rules="[(val) => !!val || 'This field is required']"
            class="tw-col-span-3"
          />
          <q-input
            v-model="form.harga"
            filled
            label="Harga"
            prefix="Rp."
            mask="###.###.###.###"
            reverse-fill-mask
            unmasked-value
            :rules="[(val) => !!val || 'This field is required']"
            class="tw-col-span-3"
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
    name: "Kategori",
    label: "Kategori",
    align: "left",
    field: (row) => row.kategori?.name,
    sortable: true,
  },
  {
    name: "Stok",
    label: "Stok",
    align: "left",
    field: (row) => row.stok?.stok,
    sortable: true,
  },
  {
    name: "Supplier",
    label: "Supplier",
    align: "left",
    field: (row) => row.supplier?.name,
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
  name: null,
  deskripsi: "",
  kategori_id: null,
  supplier_id: null,
  harga: null,
  file: null,
  stok: null,
};

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    return {
      columns,
      rows: ref([]),
      kategori: ref([]),
      supplier: ref([]),
      loading: ref(false),
      search: ref(""),
      is_edit: ref(false),
      confirm: ref(false),
      src: ref(""),

      form_dialog: ref(false),
      id: ref(""),
      form: ref(structuredClone(initial_form)),
    };
  },
  mounted() {
    this.getData();
    this.getkategori();
    this.getSupplier();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$api
        .get("/produk")
        .then((res) => {
          this.rows = res.data.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getkategori() {
      this.$api
        .get("/kategori")
        .then((res) => {
          this.kategori = res.data.data.map((e) => {
            return { label: e.name, value: e.id };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSupplier() {
      this.$api
        .get("/suppliers")
        .then((res) => {
          this.supplier = res.data.data.map((e) => {
            return { label: e.name, value: e.id };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFilePicked(val) {
      this.src = val ? URL.createObjectURL(val) : "";
    },
    openDialog(data) {
      if (!data) {
        this.src = null;
        this.form = { ...initial_form };
        this.is_edit = false;
      } else {
        this.is_edit = true;
        this.id = data.id;
        if (data.image) {
          this.src = this.$urlapi + "/" + data.image;
        }

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
      var form = new FormData();
      for (const key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          form.append(key, this.form[key]);
        }
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (!this.is_edit) {
        form.append("created_by", this.user.id);
        this.$api
          .post("/produk", form, config)
          .then((res) => {
            this.$q.notify({
              message: "Produk successfully created",
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
        form.append("updated_by", this.user.id);
        this.$api
          .put("/produk/" + this.id, form, config)
          .then((res) => {
            this.$q.notify({
              message: "Produk successfully updated",
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
        .delete("/produk/" + this.id)
        .then((res) => {
          this.$q.notify({
            message: "Produk successfully deleted",
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
