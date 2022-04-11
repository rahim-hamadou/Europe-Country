<template>
	<div class="home">
		<NavBar />
	</div>
	<div class="row bg"></div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";

export default {
	name: "AccueilVue",
	components: {
		NavBar,
	},
};
</script>

<style scoped>
.bg {
	margin: auto;
	width: 100%;
	height: 40vh;
	background-image: url("../assets/Banner-Europe.jpeg");
	background-size: cover;
	background-position: center;
}
</style>
