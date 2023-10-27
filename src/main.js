import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const pinia = createPinia();
// 1. Assign app to a variable
const app = createApp(App);
app.provide(/* key */ 'message', /* value */ 'vue js ')
// 2. Assign the global variable before mounting
app.config.globalProperties.globalVariable = "My Name is Ajay Mandyal "; // global variable
app.use(pinia).use(router).mount("#app");