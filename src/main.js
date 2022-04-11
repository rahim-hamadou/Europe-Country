import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

// ROUTER
router.beforeEach((to, from, next) => {
	document.title = to.meta.title || "Your Website Title";
	next();
});
// ROUTER

// BOOTSRAP
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// BOOTSRAP

createApp(App).use(BootstrapVue3).use(router).mount("#app");
