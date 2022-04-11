<template>
	<div class="hello">
		<nav class="navbar navbar-light bg-light borderNav">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Le Monde</a>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Recherche" />
					<button class="btn btn-outline-primary" type="submit">Recherche</button>
				</form>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.borderNav {
	-webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 29px -22px rgba(128, 158, 255, 0.17);
	box-shadow: 0px 10px 18px -7px #000000, 5px 5px 29px -22px rgba(128, 158, 255, 0.17);
}
</style>
