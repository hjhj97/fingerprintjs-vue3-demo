import { createApp } from "vue";
import App from "./App.vue";
import { fpjsPlugin } from "@fingerprintjs/fingerprintjs-pro-vue-v3";

const app = createApp(App);
app.use(fpjsPlugin, {
  loadOptions: {
    apiKey: "xXtdkXHke9uTOSKoL44e",
    region: "ap",
  },
});
app.mount("#app");
