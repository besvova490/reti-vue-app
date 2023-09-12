import { createApp } from "vue";
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

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);

router.isReady().then(() => app.mount("#app"));
