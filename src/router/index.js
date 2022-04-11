import { createRouter, createWebHashHistory } from "vue-router";
import AccueilVue from "../views/acceuilView.vue";
import InformationVue from "../views/InformationView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: AccueilVue,
		meta: { title: "Welcome" },
	},
	{
		path: "/about",
		name: "about",
		meta: { title: "About" },
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
	{
		path: "/pays/:id",
		name: "information",
		component: InformationVue,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
