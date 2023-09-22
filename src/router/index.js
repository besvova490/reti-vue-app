import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/HomeView.vue")
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "log-in",
        name: "login",
        component: () => import("../views/auth/LoginView.vue")
      },
      {
        path: "sign-up",
        name: "signup",
        component: () => import("../views/auth/SignUpView.vue")
      }
    ]
  },
  {
    path: "/dashboard/:nestedPath(.*)?",
    name: "dashboard",
    component: () => import("../layouts/DashboardLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard-home",
        component: () => import("../views/dashboard/DashboardView.vue")
      }
    ]
  },
  {
    path: "/:notFound(.*)",
    name: "notFound",
    component: () => import("../views/tech-pages/NotFoundView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
