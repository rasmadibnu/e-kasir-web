<template>
  <q-page class="tw-p-4 tw-pb-20">
    <div class="tw-text-xl tw-mb-4 tw-font-semibold">Dashboard</div>
    <div class="tw-container tw-mx-auto tw-grid">
      <div class="tw-grid tw-gap-4 tw-mb-4 md:tw-grid-cols-2 xl:tw-grid-cols-4">
        <q-card flat class="tw-rounded-lg">
          <q-card-section class="tw-flex tw-items-center tw-space-x-4">
            <q-avatar color="primary" text-color="white">
              <VsxIcon iconName="Profile2User" :size="22" />
            </q-avatar>
            <div>
              <p class="tw-text-sm tw-font-medium tw-text-gray-600">Kasir</p>
              <p class="tw-text-lg tw-font-semibold tw-text-gray-700">
                {{ count.kasir }}
              </p>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="tw-rounded-lg">
          <q-card-section class="tw-flex tw-items-center tw-space-x-4">
            <q-avatar color="secondary" text-color="white">
              <VsxIcon iconName="Box" :size="22" />
            </q-avatar>
            <div>
              <p class="tw-text-sm tw-font-medium tw-text-gray-600">Produk</p>
              <p class="tw-text-lg tw-font-semibold tw-text-gray-700">
                {{ count.produk }}
              </p>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="tw-rounded-lg">
          <q-card-section class="tw-flex tw-items-center tw-space-x-4">
            <q-avatar color="accent" text-color="white">
              <VsxIcon iconName="Building" :size="22" />
            </q-avatar>
            <div>
              <p class="tw-text-sm tw-font-medium tw-text-gray-600">Supplier</p>
              <p class="tw-text-lg tw-font-semibold tw-text-gray-700">
                {{ count.supplier }}
              </p>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat class="tw-rounded-lg">
          <q-card-section class="tw-flex tw-items-center tw-space-x-4">
            <q-avatar color="warning" text-color="white">
              <VsxIcon iconName="BoxTime" :size="22" />
            </q-avatar>
            <div>
              <p class="tw-text-sm tw-font-medium tw-text-gray-600">Stok</p>
              <p class="tw-text-lg tw-font-semibold tw-text-gray-700">
                {{ stok }}
              </p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-card flat>
      <q-card-section class="tw-text-lg"> Chart Bulanan </q-card-section>
      <q-card-section class="q-pt-none">
        <q-tabs
          v-model="tab"
          active-color="primary"
          indicator-color="primary"
          align="left"
          no-caps
        >
          <q-tab name="transaksi" label="Jumlah Transaksi" />
          <q-tab name="uang" label="Pendapatan" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="transaksi">
            <VueApexCharts
              type="area"
              height="250"
              :options="chartOptions"
              :series="series"
            ></VueApexCharts>
          </q-tab-panel>

          <q-tab-panel name="uang">
            <VueApexCharts
              type="area"
              height="250"
              :options="chartOptionsUang"
              :series="seriesUang"
            ></VueApexCharts>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <div class="text-center tw-text-2xl tw-mt-4">Best Selling</div>
    <div class="tw-grid tw-grid-cols-2 tw-mt-4 tw-gap-4">
      <q-table
        flat
        title="Kasir"
        :pagination="{ rowsPerPage: 10 }"
        :rows="kasirProductive"
        :columns="[
          {
            name: 'name',
            label: 'Kasir',
            field: 'name',
            align: 'left',
            sortable: true,
          },
          {
            name: 'transaksi',
            label: 'Total Transaksi',
            field: 'transaksi',
            align: 'left',
            sortable: true,
          },
          {
            name: 'uang',
            label: 'Total Pendapatan',
            field: (row) => rupiah(row.uang),
            align: 'left',
            sortable: true,
          },
        ]"
      ></q-table>
      <q-table
        flat
        title="Produk"
        :pagination="{ rowsPerPage: 10 }"
        :rows="bestSelling"
        :columns="[
          {
            name: 'name',
            label: 'Produk',
            field: 'name',
            align: 'left',
            sortable: true,
          },
          {
            name: 'transaksi',
            label: 'Total Terjual',
            field: 'count',
            align: 'left',
            sortable: true,
          },
          {
            name: 'uang',
            label: 'Total Pendapatan',
            field: (row) => rupiah(row.sum),
            align: 'left',
            sortable: true,
          },
        ]"
      >
      </q-table>
    </div>
  </q-page>
</template>
<script>
import moment from "moment";
import { defineComponent, ref } from "vue";
import VueApexCharts from "vue3-apexcharts";
import VsxIcon from "components/VxIcon.vue";

export default defineComponent({
  components: {
    VueApexCharts,
    VsxIcon,
  },
  setup() {
    const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    };
    return {
      rupiah,
      series: ref([
        {
          name: "Transaksi",
          data: [],
        },
      ]),
      seriesUang: ref([
        {
          name: "Pendapatan",
          data: [],
        },
      ]),
      chartOptions: ref({
        chart: {
          type: "area",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },

        colors: ["#1976D2"],

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },

        yaxis: {
          labels: {
            formatter: (value) => {
              return value.toFixed(0);
            },
          },
        },

        legend: {
          horizontalAlign: "left",
        },
      }),
      chartOptionsUang: ref({
        chart: {
          type: "area",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },

        colors: ["#00E396"],

        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },

        yaxis: {
          labels: {
            formatter: (value) => {
              return rupiah(value.toFixed(0));
            },
          },
        },

        legend: {
          horizontalAlign: "left",
        },
      }),
      tab: ref("transaksi"),
      count: ref({
        kasir: 0,
        produk: 0,
        supplier: 0,
      }),
      stok: ref(0),
      kasirProductive: ref([]),
      bestSelling: ref([]),
    };
  },

  mounted() {
    this.getTransaksi();
    this.getData();
    this.getProduk();
  },

  methods: {
    getTransaksi() {
      this.$api
        .get("/transaksi")
        .then((res) => {
          var series = this.chartOptions.xaxis.categories.map((month) => {
            return { month: month, count: 0, sum: 0 };
          });

          res.data.data.forEach((element) => {
            element.detail.forEach((produk) => {
              var findProduk = this.bestSelling.find(
                (sold) => sold.id == produk.produk_id
              );

              if (!findProduk) {
                this.bestSelling.push({
                  id: produk.produk_id,
                  name: produk.produk.name,
                  count: produk.jumlah_beli,
                  sum: produk.harga * produk.jumlah_beli,
                });
              } else {
                findProduk.count += produk.jumlah_beli;
                findProduk.sum += produk.harga * produk.jumlah_beli;
              }
            });
            var findKasir = this.kasirProductive.find(
              (kasir) => kasir.id == element.kasir_id
            );

            if (!findKasir) {
              this.kasirProductive.push({
                id: element.kasir_id,
                name: element.user_create.name,
                transaksi: 1,
                uang: element.total_belanja,
              });
            } else {
              findKasir.transaksi += 1;
              findKasir.uang += element.total_belanja;
            }

            var month = moment(element.tanggal).format("MMM");
            var findSeries = series.find((obj) => obj.month == month);
            findSeries.count += 1;
            findSeries.sum += element.total_belanja;
          });

          this.kasirProductive = this.kasirProductive
            .sort((a, b) => a.transaksi - b.transaksi)
            .reverse();

          this.bestSelling = this.bestSelling
            .sort((a, b) => a.count - b.count)
            .reverse();

          this.series[0].data = series.map((series) => series.count);
          this.seriesUang[0].data = series.map((series) => series.sum);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getData() {
      this.$api
        .get("/dashboard")
        .then((res) => {
          this.count = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getProduk() {
      this.$api
        .get("/produk")
        .then((res) => {
          res.data.data.forEach((produk) => {
            this.stok += produk.stok.stok;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
