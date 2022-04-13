import { createRouter, createWebHashHistory } from "vue-router";
import WorldView from "../views/WorldView.vue";
import EuropeView from "../views/EuropeView.vue";
import AfriqueView from "../views/AfriqueView.vue";
import AsieView from "../views/AsieView.vue";
import Infobase from "../components/InfoBase.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: WorldView,
		meta: { title: "Welcome" },
	},
	{
		path: "/Europe",
		name: "europe-info",
		meta: { title: "Europe" },
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: EuropeView,
	},
	{
		path: "/Afrique",
		name: "afrique-info",
		component: AfriqueView,
		meta: { title: "Afrique" },
	},
	{
		path: "/Asie",
		name: "asie-info",
		component: AsieView,
		meta: { title: "Asie" },
	},
	{
		path: "/pays/:id",
		name: "details",
		component: Infobase,
		// meta: { title: "Asie" },
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
