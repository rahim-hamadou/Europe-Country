<template>
	<div class="Asie">
		<NavBar />
	</div>
	<div class="row bg"></div>
	<div class="mt-5">
		<!-- <CardContent
			:key="index"
			v-for="(paysAsia, index) in paysAsia.data"
			:id="index"
			:paysAsia="paysAsia"
		></CardContent> -->
	</div>
	<Footer />
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
// import CardContent from "../components/Cards.vue";
import axios from "axios";

export default {
	name: "AsieView",
	data() {
		return {
			paysAsia: null,
		};
	},
	mounted() {
		axios
			.get("https://restcountries.com/v3.1/region/asia")
			.then((response) => {
				this.paysAsia = response.data;
			})
			.catch((error) => {
				error.message = "Erreur de chargement";
			});
	},

	components: {
		NavBar,
		Footer,
		// CardContent,
	},
};
</script>

<style scoped>
.bg {
	margin: auto;
	width: 100%;
	height: 40vh;
	background-image: url("../assets/Banner-Asie.jpeg");
	background-size: cover;
	background-position: center;
}
</style>
