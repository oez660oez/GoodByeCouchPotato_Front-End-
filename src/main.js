import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //將pinai數據塞進localstrage
import "./assets/sweetalert2.css";
import "./assets/fonts.css";
import "./assets/GoBack.css";
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
pinia.use(piniaPluginPersistedstate);
