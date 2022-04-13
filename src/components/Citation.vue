<template>
	<div class="container">
		<div class="col mb-4">
			<h2>Savez vous d'ou vient ce proverbe?</h2>
		</div>
		<div class="col citationDetail">
			<!-- <ul id="example-1">
				<li v-for="item in citations" :key="item.content">{{ item.content }} | {{ item.author }}</li>
			</ul> -->
			<p>{{ citations[[Math.floor(Math.random() * this.citations.length)]].content }}</p>
			<!-- <caption class="author">
				{{
					citations[[Math.floor(Math.random() * this.citations.length)]].author
				}}
			</caption> -->
		</div>
	</div>
</template>
<script>
// import axios from "axios";
export default {
	name: "CitationContent",
	data() {
		return {
			citations: [
				{
					content:
						"Notre monde a atteint un stade critique. Les enfants n'écoutent plus leurs parents. La fin du monde ne peut pas être loin.",
					author: "Proverbes égyptien",
				},
				{
					content: "Quand tout le monde a dîné, il n'y a plus de différence que dans les écots.",
					author: "Proverbes Chinois",
				},
				{
					content:
						"Trois choses font aller le monde de travers : Ne pas écouter les vieillards, Écouter ses désirs, Avoir bonne opinion de soi-même.",
					author: "Proverbes Arabes",
				},
				{
					content: "Trois choses mènent le monde : La loi, la religion et la bienfaisance.",
					author: "Proverbes Juifs",
				},
				{
					content: "Quand Dieu fait lever le soleil, c'est pour tout le monde,.",
					author: "Proverbes Espagnols",
				},
				{ content: "Celui qui est méchant se défie de tout le monde.", author: "Proverbes Belges" },
				{
					content: "Aujourd'hui est un jour aussi bon qu'un autre pour quitter ce monde.",
					author: "Proverbes Indiens",
				},
				{ content: "Une parole de vérité pèse plus que le monde entier.", author: "Proverbes russe" },
				{
					content:
						"Les hommes du monde sont comme des passagers que le vaisseau emporte durant leur sommeil.",
					author: "Proverbes marocain",
				},
			],
		};
	},
};
</script>
<style scoped>
.citationDetail {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
