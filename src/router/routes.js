const requireAuth = (to, from, next) => {
  var token =
    sessionStorage.getItem("access_token") == null
      ? null
      : JSON.parse(atob(sessionStorage.getItem("access_token").split(".")[1]));
  if (token === null) {
    next("/login");
  }
  next();
};

const routes = [
  {
    path: "/",
    beforeEnter: requireAuth,
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("pages/UnderConstruction.vue"),
        name: "Home",
      },
      {
        path: "/transaksi",
        component: () => import("pages/UnderConstruction.vue"),
        name: "Transaksi",
      },
      {
        path: "/stok",
        component: () => import("pages/UnderConstruction.vue"),
        name: "Stok",
      },
      {
        path: "/kurir",
        component: () => import("pages/UnderConstruction.vue"),
        name: "Kurir",
      },
      {
        path: "/laporan",
        component: () => import("pages/UnderConstruction.vue"),
        name: "Laporan",
      },

      {
        path: "/kategori",
        component: () => import("pages/Master/Kategori.vue"),
        name: "Kategori",
      },
      {
        path: "/produk",
        component: () => import("pages/Master/Produk.vue"),
        name: "Produk",
      },
      {
        path: "/supplier",
        component: () => import("pages/Master/Supplier.vue"),
        name: "Supplier",
      },
      {
        path: "/user",
        component: () => import("pages/Master/User.vue"),
        name: "User",
      },
    ],
  },

  {
    path: "/login",
    component: () => import("pages/Login.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
