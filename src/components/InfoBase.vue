<template>
	<div class="row">
		<div class="row search row my-4 w-25 mx-auto">
			<input
				id="inputSearch"
				type="text"
				placeholder="Recherche .."
				v-model="searchTerm"
				@keyup="countrySearch()"
			/>
		</div>
		<div>
			<span>{{ result }}</span>
		</div>
		<div class="row">
			<div name="countryInfo">
				<ul id="countryList" v-for="(country, index) in paysUnique" :key="index">
					<img :src="country.flags.png" alt="" />
					<li>{{ country.name.common }}</li>
				</ul>

				<!-- <div class="col">
					<h2>Un pays: {{ paysUnique.translations.fra }}</h2>
					<p>Popuplation: {{ paysUnique.population }}</p>
					<p>Langues:</p>
					<ul :key="index" v-for="(paysUnique, index) in paysUnique.languages">
						<li>{{ paysUnique.name }}</li>
					</ul>
				</div> -->
				<p>{{ paysUnique.name }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "InfoBase",
	data() {
		return {
			paysUnique: "",
			searchTerm: "",
		};
	},

	async mounted() {
		await this.axios
			.get("https://restcountries.com/v3.1/region/africa")
			.then((response) => (this.paysUnique = response.data));
		console.log(this.paysUnique);
	},
	methods: {
		countrySearch() {
			if (this.searchQuery) {
				return this.resources.filter((item) => {
					return this.searchQuery
						.toLowerCase()
						.split(" ")
						.every((v) => item.title.toLowerCase().includes(v));
				});
			} else {
				return this.resources;
			}
		},
		test() {
			alert("test");
		},
		computed: {
			filterByTerm() {
				return this.paysUnique.filter((country) => {
					return country.name.common.toLowerCase().includes(this.searchTerm);
				});
			},
		},
	},
};
</script>
<style lang="scss" scoped>
.flag-area {
	width: 100%;
	height: 80%;
}
ul {
	list-style: none;
}
</style>
