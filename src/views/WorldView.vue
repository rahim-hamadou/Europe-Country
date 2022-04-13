<template>
	<div class="home">
		<NavBar />
	</div>
	<div class="container-fluid bg"></div>
	<div class="col mx-4 d-flex align-content-center justify-content-center flex-column my-2">
		<h1>Decouvrons le monde</h1>
		<p>
			Cette page recense les pays du monde, quel que soit leur statut : reconnus par l'ONU, par un ou plusieurs
			autres pays, ou même auto-proclamés.
		</p>
	</div>
	<div>
		<CitationContent></CitationContent>
	</div>

	<!-- <div class="test my-5">
		<a href="#"><img :src="pays.flag.png" /></a>

		<ul id="example-1">
			<h2>Nom de pays</h2>
			<li v-for="(pays, index) in pays" :key="index">
				{{ pays.translations.fra.common }}
				<img :src="pays.flags.png" alt=" drapeau" />
			</li>
		</ul>
	</div> -->

	<div>
		<InfoBase></InfoBase>
	</div>

	<Footer />
	<router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import CitationContent from "../components/Citation.vue";
import InfoBase from "../components/InfoBase.vue";

export default {
	name: "WorldView",
	data() {
		return {
			pays: "",
		};
	},
	components: {
		NavBar,
		Footer,
		CitationContent,
		InfoBase,
	},
	async mounted() {
		await this.axios
			.get("https://restcountries.com/v3.1/region/africa")
			.then((response) => (this.pays = response.data));
		console.log(this.pays);
	},
};
</script>

<style scoped>
.bg {
	margin: auto;
	width: 100%;
	height: 40vh;
	background-image: url("../assets/Banner-World.jpeg");
	background-size: cover;
	background-position: 25% 25%;
}
img {
	width: 50px;
	height: 30px;
	overflow: hidden;
}
ul {
	list-style: none;
}
</style>
