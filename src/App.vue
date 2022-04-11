<template>
	<nav>
		<AccueilVue />
	</nav>
	<router-view />
</template>

<script>
import AccueilVue from "./views/acceuilView.vue";

export default {
	name: "App",
	component: AccueilVue,
};
</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
