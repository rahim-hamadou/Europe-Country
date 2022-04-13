<template>
	<div class="home">
		<NavBar />
	</div>
	<div class="row bg"></div>
	<div class="mt-5">
		<!-- <CardContent
			:key="index"
			v-for="(paysAfrica, index) in paysAfrica.data"
			:id="index"
			:paysAfrica="paysAfrica"
		></CardContent> -->
	</div>
	<div></div>

	<!-- <p>{{ test[1].flag }}</p> -->
	<p>oh</p>
	<Footer />
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
// import CardContent from "../components/Cards.vue";
// import axios from "axios";

export default {
	name: "AfriqueView",
	data() {
		return {
			paysAfrica: null,
			test: null,
		};
	},
	components: {
		NavBar,
		Footer,
		// CardContent,
	},
	// mounted() {
	// 	axios
	// 		.get("https://restcountries.com/v2/regionalbloc/au")
	// 		.then((response) => {
	// 			this.test = response.data;
	// 			console.log(this.test[0].region);
	// 			console.log(this.test[1]);
	// 			console.log(response.data[0].flag);
	// 			console.log(this.test[1].translations.fr);
	// 		})
	// 		.catch((error) => {
	// 			error.message = "Erreur de chargement";
	// 		});
	// },
};
</script>

<style scoped>
.bg {
	margin: auto;
	width: 100%;
	height: 40vh;
	background-image: url("../assets/Banner-Afrique.jpeg");
	background-size: cover;
	background-position: center;
}
</style>
