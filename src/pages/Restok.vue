<template>
  <q-page class="tw-p-4 tw-space-y-6">
    <div class="tw-text-xl tw-font-semibold">Re-Stok</div>
    <q-table
      color="primary"
      :columns="columns"
      :rows="rows"
      :loading="loading"
      :filter="search"
      title="List Produk"
      :pagination="{ rowsPerPage: 10 }"
      v-model:selected="selected"
      selection="multiple"
      row-key="id"
      flat
    >
      <template #top-right>
        <div class="tw-flex tw-space-x-4">
          <q-btn no-caps outline color="primary" @click="checkSelected()">
            <vx-icon iconName="BoxAdd" class="tw-mr-2" :size="18" />
            Re-Stok
            <q-badge color="red" v-if="this.selected.length" floating>{{
              this.selected.length
            }}</q-badge>
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
          <q-btn
            :to="{
              name: 'ProdukDetail',
              params: { id: props.row.id, from: 'Stok' },
            }"
            outline
            size="sm"
            class="tw-flex"
            color="primary"
            no-caps
          >
            <div class="tw-flex tw-items-center">
              <vx-icon iconName="Eye" class="tw-mr-2" :size="18" />
              View
            </div>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
  <q-dialog v-model="confirm">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6 tw-flex tw-items-center">
          <VxIcon iconName="BoxAdd" class="tw-mr-2" :size="22" />
          Re-Stok
        </div>
      </q-card-section>

      <q-card-section class="q-py-none">
        <div class="tw-mb-3">
          Anda yakin ingin mengupdate stok
          <b>{{ this.selected.map((e) => e.name).join(", ") }}</b
          >?
        </div>
        <q-input
          filled
          :rules="[(val) => !!val || 'This field required']"
          label="Stok"
          v-model.number="new_stok"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" no-caps v-close-popup />
        <q-btn flat label="Yes" color="primary" no-caps @click="submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from "vue";
import VxIcon from "components/VxIcon.vue";
import moment from "moment";
const columns = [
  // {
  //   name: "index",
  //   label: "#",
  //   align: "center",
  // },
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
    name: "Harga",
    label: "Harga",
    align: "left",
    field: "harga_rp",
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

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    return {
      columns,
      rows: ref([]),
      loading: ref(false),
      confirm: ref(false),
      selected: ref([]),
      search: ref(""),
      new_stok: ref(),
    };
  },
  mounted() {
    this.getData();
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
    submit() {
      this.loading = true;
      var payload = [];

      this.selected.map((e) => {
        payload.push({
          produk_id: e.id,
          stok: e.stok.stok + this.new_stok,
          value: this.new_stok,
          type: "Re-Stok",
          created_by: this.user.id,
        });
      });

      this.$api
        .post("/stoks", payload)
        .then((res) => {
          this.$q.notify({
            message: "Stok successfully updated",
            color: "positive",
          });
          this.confirm = false;
          this.new_stok = ref();
          this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkSelected() {
      if (this.selected.length > 0) {
        this.confirm = true;
      } else {
        this.$q.notify({
          message: "Silahkan pilih produk terlebih dahulu",
          color: "negative",
        });
      }
    },
  },
});
</script>
