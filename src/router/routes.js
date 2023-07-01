const requireAuth = (to, from, next) => {
  var token =
    sessionStorage.getItem("access_token") == null
      ? null
      : JSON.parse(atob(sessionStorage.getItem("access_token").split(".")[1]));
  console.log(token);
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
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "Home",
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
