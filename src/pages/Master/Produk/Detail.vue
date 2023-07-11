<template>
  <q-page class="tw-p-4 tw-space-y-6">
    <div class="tw-flex tw-items-center">
      <q-btn no-caps dense flat :to="{ name: $route.params.from }">
        <vx-icon iconName="ArrowLeft2" :size="24" />
        <div class="tw-text-xl tw-font-semibold">Back</div>
      </q-btn>
    </div>
    <q-card flat>
      <q-card-section class="tw-flex tw-justify-between">
        <div class="tw-text-lg">{{ produk?.name }}</div>
        <q-btn no-caps outline color="primary" @click="confirm = true">
          <vx-icon iconName="BoxAdd" class="tw-mr-2" :size="18" />
          Re-Stok
        </q-btn>
      </q-card-section>
      <q-card-section class="q-pt-none tw-grid tw-grid-cols-2">
        <q-markup-table flat separator="none" dense :wrap-cells="true">
          <tbody>
            <tr>
              <td class="text-left">Kategori</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.kategori.name }}</td>
            </tr>
            <tr>
              <td class="text-left">Supplier</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.supplier.name }}</td>
            </tr>
            <tr>
              <td class="text-left">Harga</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.harga_rp }}</td>
            </tr>
            <tr>
              <td class="text-left">Created By</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.user_create.name }}</td>
            </tr>
          </tbody>
        </q-markup-table>
        <q-markup-table flat separator="none" dense :wrap-cells="true">
          <tbody>
            <tr>
              <td class="text-left">Stok</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.stok.stok }}</td>
            </tr>
            <tr>
              <td class="text-left">Last Update Stok</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.stok.user_create.name }}</td>
            </tr>
            <tr>
              <td class="text-left">Last Stok Action</td>
              <td class="text-left">:</td>
              <td class="text-left">{{ produk?.stok.type }}</td>
            </tr>
            <tr>
              <td class="text-left">Created At</td>
              <td class="text-left">:</td>
              <td class="text-left">
                {{ moment(produk?.created_at).format("YYYY-MM-DD hh:mm:ss") }}
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="tw-text-lg tw-mb-2">History Stok</div>
        <q-tabs
          no-caps
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="table" label="Table" />
          <q-tab name="chart" label="Chart" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="table">
            <q-table flat :rows="produk?.history_stok" :columns="columns">
              <template #body-cell-index="props">
                <q-td :props="props">
                  {{ props.rowIndex + 1 }}
                </q-td>
              </template>
            </q-table>
          </q-tab-panel>

          <q-tab-panel name="chart">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <q-dialog v-model="confirm">
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6 tw-flex tw-items-center">
            <VxIcon iconName="Warning2" class="tw-mr-2" :size="22" />
            Re-Stok
          </div>
        </q-card-section>

        <q-card-section class="q-py-none">
          <div class="tw-mb-3">
            Anda yakin ingin mengupdate stok
            <b>{{ produk?.name }}</b
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
  </q-page>
</template>
<script>
import { defineComponent, ref } from "vue";
import VxIcon from "components/VxIcon.vue";
import moment from "moment";
export default defineComponent({
  props: ["user"],
  components: { VxIcon },

  setup() {
    const columns = [
      {
        name: "index",
        label: "#",
        align: "center",
      },
      {
        name: "action",
        label: "Action",
        align: "left",
        field: "type",
        sortable: true,
      },
      {
        name: "value",
        label: "Value",
        align: "left",
        field: "value",
        sortable: true,
      },
      {
        name: "stok",
        label: "Stok",
        align: "left",
        field: "stok",
        sortable: true,
      },
      {
        name: "ca",
        label: "At",
        align: "left",
        field: "created_at",
        format: (val) => moment(val).format("YYYY-MM-DD hh:mm:ss"),
        sortable: true,
      },
      {
        name: "by",
        label: "By",
        align: "left",
        field: (row) => row.user_create.name,
        sortable: true,
      },
    ];

    return {
      columns,
      moment,
      produk: ref(null),
      tab: ref("table"),
      confirm: ref(false),
      new_stok: ref(),
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("/produk/" + this.$route.params.id).then((response) => {
        this.produk = response.data.data;
      });
    },
    submit() {
      this.loading = true;
      var payload = [];

      payload.push({
        produk_id: this.produk.id,
        stok: this.produk.stok.stok + this.new_stok,
        value: this.new_stok,
        type: "Re-Stok",
        created_by: this.user.id,
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
  },
});
</script>
