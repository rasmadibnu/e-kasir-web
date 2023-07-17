<template>
  <q-page class="tw-p-4 tw-space-y-6">
    <div class="tw-text-xl tw-font-semibold">Transaksi</div>
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
          <q-input dense placeholder="Search..." v-model="search" filled>
            <template #prepend>
              <vx-icon iconName="SearchStatus" :size="20" />
            </template>
          </q-input>
        </div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            {{ props.rowIndex + 1 }}
          </q-td>
          <q-td class="tw-font-semibold"> #{{ props.row.no_transaksi }} </q-td>
          <q-td>
            {{ props.row.user_create.name }}
          </q-td>

          <q-td> {{ props.row.diskon }}% </q-td>
          <q-td> {{ props.row.ppn }}% </q-td>
          <q-td> {{ props.row.total_belanja_rp }}</q-td>
          <q-td>
            {{ moment(props.row.created_at).format("YYYY-MM-DD hh:mm:ss") }}
          </q-td>
          <q-td class="text-center">
            <q-btn
              size="sm"
              outline
              color="primary"
              round
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'expand_less' : 'expand_more'"
            />
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <q-table
                flat
                dense
                bordered
                :rows="props.row.detail"
                :columns="[
                  {
                    name: 'index',
                    label: '#',
                    align: 'center',
                  },
                  {
                    name: 'Produk',
                    label: 'Produk',
                    align: 'left',
                    field: (row) => row.produk.name,
                    sortable: true,
                  },
                  {
                    name: 'Harga',
                    label: 'Harga',
                    align: 'left',
                    field: (row) => row.harga_rp,
                    sortable: true,
                  },
                  {
                    name: 'Produk',
                    label: 'Jumlah Beli',
                    align: 'center',
                    field: 'jumlah_beli',
                    sortable: true,
                  },
                  {
                    name: 'Subtotal',
                    label: 'Subtotal',
                    align: 'right',
                    field: (row) =>
                      this.rupiah(row.produk.harga * row.jumlah_beli),
                    sortable: true,
                  },
                ]"
              >
                <template #body-cell-index="props">
                  <q-td :props="props">
                    {{ props.rowIndex + 1 }}
                  </q-td>
                </template>
              </q-table>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
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
    name: "No Transaksi",
    label: "No Transaksi",
    align: "left",
    field: "no_transaksi",
    sortable: true,
  },
  {
    name: "Kasir",
    label: "Kasir",
    align: "left",
    field: (row) => row.user_create?.name,
    sortable: true,
  },
  {
    name: "Diskon",
    label: "Diskon",
    align: "left",
    field: "diskon",
    format: (val) => val + "%",
    sortable: true,
  },
  {
    name: "PPN",
    label: "PPN",
    align: "left",
    field: "ppn",
    format: (val) => val + "%",
    sortable: true,
  },
  {
    name: "TotalBelanja",
    label: "Total Belanja",
    align: "left",
    field: "total_belanja_rp",
    sortable: true,
  },
  {
    name: "Created",
    label: "Created At",
    align: "left",
    field: (row) => moment(row.created_at).format("YYYY-MM-DD hh:mm:ss"),
    sortable: true,
  },
  {
    name: "action",
    label: "Action",
    align: "center",
  },
];

export default defineComponent({
  props: ["user"],
  components: { VxIcon },
  setup() {
    return {
      moment,
      columns,
      rows: ref([]),
      loading: ref(false),
      search: ref(""),
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$api
        .get("/transaksi")
        .then((res) => {
          this.rows = res.data.data;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
  },
});
</script>
