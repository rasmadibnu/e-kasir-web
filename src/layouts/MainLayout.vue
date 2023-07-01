<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-gray-100 tw-font-['Poppins']">
    <q-header class="bg-white text-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="tw-font-medium"> E-Kasir </q-toolbar-title>

        <div>
          <q-btn flat no-caps
            >{{ auth.user.name }}
            <VxIcon class="tw-ml-2" :size="18" iconName="ArrowDown2" />

            <q-menu class="tw-shadow-none tw-border">
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <VxIcon :size="18" iconName="User" />
                  </q-item-section>
                  <q-item-section class="tw-mr-4">Profile</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  v-close-popup
                  class="text-negative"
                  @click="alert = true"
                >
                  <q-item-section>
                    <VxIcon :size="18" iconName="Logout" />
                  </q-item-section>
                  <q-item-section class="tw-mr-4">Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item-label header> Master Data </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks2"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6 text-negative tw-flex tw-items-center">
          <VxIcon iconName="Logout" class="tw-mr-2" :size="22" />
          Logout
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Are you sure want to logout this time?
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Yes" color="negative" @click="logout" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useAuthStore } from "src/stores/auth";
import VxIcon from "components/VxIcon.vue";

const linksList = [
  {
    title: "Dashboard",
    icon: "Chart",
    link: "Home",
  },
  {
    title: "Transaksi",
    icon: "Receipt1",
    link: "Transaksi",
  },
  {
    title: "Stok",
    icon: "BoxAdd",
    link: "Stok",
  },
  {
    title: "Kurir",
    icon: "Car",
    link: "Kurir",
  },
  {
    title: "Laporan",
    icon: "DocumentText",
    link: "Laporan",
  },
];

const linksList2 = [
  {
    title: "Kategori Produk",
    caption: "github.com/quasarframework",
    icon: "Category",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Produk",
    caption: "github.com/quasarframework",
    icon: "Box",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Supplier",
    caption: "github.com/quasarframework",
    icon: "Building",
    link: "https://github.com/quasarframework",
  },
  {
    title: "User",
    caption: "quasar.dev",
    icon: "Profile2User",
    link: "https://quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    VxIcon,
  },

  setup() {
    const auth = useAuthStore();
    const leftDrawerOpen = ref(false);

    return {
      auth,
      essentialLinks: linksList,
      essentialLinks2: linksList2,
      leftDrawerOpen,
      alert: ref(false),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {
    // console.log(this.auth.user);
  },
  methods: {
    logout() {
      sessionStorage.removeItem("access_token");
      this.$router.push("/login");
    },
  },
});
</script>
