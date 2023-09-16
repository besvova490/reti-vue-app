import { createApp, defineAsyncComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// components
import App from "./App.vue";

// helpers
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// styles
import "./assets/styles/index.scss";

const app = createApp(App);

app.component("BaseButton", defineAsyncComponent(() => import("./components/shared/BaseButton.vue")));
app.component("BaseInput", defineAsyncComponent(() => import("./components/shared/BaseInput.vue")));
app.component("BaseTextarea", defineAsyncComponent(() => import("./components/shared/BaseTextarea.vue")));
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);

router.isReady().then(() => app.mount("#app"));
