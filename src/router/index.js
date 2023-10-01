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
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/DashboardLayout.vue"),
    children: [
      {
        path: "overview",
        alias: "",
        name: "dashboard-home",
        component: () => import("../views/dashboard/DashboardView.vue")
      },
      {
        path: "insights",
        name: "dashboard-insights",
        component: () => import("../components/BaseComingSoon.vue")
      },
      {
        path: "templates",
        name: "dashboard-templates",
        component: () => import("../components/BaseComingSoon.vue")
      },
      {
        path: "membership",
        name: "dashboard-membership",
        component: () => import("../components/BaseComingSoon.vue")
      },
      {
        path: "settings",
        name: "dashboard-settings",
        component: () => import("../layouts/dashboard-settings/DashboardSettings.vue"),
        children: [
          {
            path: "subscriptions",
            alias: "",
            name: "settings-subscriptions",
            component: () => import("../views/settings/subscriptions/SubscriptionsView.vue")
          },
          {
            path: "invoice",
            name: "settings-invoice",
            component: () => import("../views/settings/InvoiceView.vue")
          },
          {
            path: "user-management",
            name: "settings-user-management",
            component: () => import("../views/settings/UserManagementView.vue")
          }
        ]
      },
      {
        path: "*",
        redirect: { name: "dashboard-home" }
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
