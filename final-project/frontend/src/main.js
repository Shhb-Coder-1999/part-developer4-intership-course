import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vue3GoogleLogin from "vue3-google-login";

import "./assets/main.css";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: "YOUR_GOOGLE_CLIENT_ID",
});

app.use(store);

app.use(router);

app.mount("#app");
