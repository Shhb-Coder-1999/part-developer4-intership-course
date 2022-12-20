import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vue3GoogleLogin from "vue3-google-login";
import setupInterceptors from "../src/services/SetupInterceptors";

import "./assets/main.css";
import { globalCookiesConfig } from "vue3-cookies";

globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "localhost",
  secure: true,
  sameSite: "SameSite=None",
});

const app = createApp(App);

setupInterceptors();

app.use(vue3GoogleLogin, {
  clientId: "YOUR_GOOGLE_CLIENT_ID",
});

app.use(store);

app.use(router);

app.mount("#app");
