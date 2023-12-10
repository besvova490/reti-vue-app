import { createRouter, createWebHistory } from "vue-router";

// helpers
import store from "@/store";

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
      },
      {
        path: "two-factor",
        name: "twoFactor",
        component: () => import("../views/auth/TwoFactorView.vue")
      }
    ]
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/DashboardLayout.vue"),
    meta: { isPrivate: true },
    children: [
      {
        path: "overview",
        alias: "",
        name: "dashboard-home",
        components: {
          default: () => import("../views/dashboard/DashboardView.vue"),
          header: () => import("../views/dashboard/components/DashboardHeader.vue")
        }
      },
      {
        path: "meeting-room",
        name: "dashboard-meeting-room",
        component: () => import("../views/meeting-room/MeetingRoomView.vue")
      },
      {
        path: "templates",
        name: "dashboard-templates",
        components: {
          default: () => import("../components/BaseComingSoon.vue"),
          header: () => import("../views/dashboard/components/DashboardHeader.vue")
        }
      },
      {
        path: "membership",
        name: "dashboard-membership",
        components: {
          default: () => import("../components/BaseComingSoon.vue"),
          header: () => import("../views/dashboard/components/DashboardHeader.vue")
        }
      },
      {
        path: "settings",
        name: "dashboard-settings",
        components: {
          default: () => import("../layouts/dashboard-settings/DashboardSettings.vue"),
          header: () => import("../views/dashboard/components/DashboardHeader.vue")
        },
        redirect: { name: "settings-subscriptions" },
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
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
    meta: { isPrivate: true }
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

router.beforeEach((to, _, next) => {
  if (to.meta.isPrivate) {
    next(store.getters["auth/isAuthenticated"] ? true : "/auth/log-in");
  } else {
    next();
  }
});

export default router;
