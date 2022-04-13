<template>
	<div class="hello">
		<nav class="navbar navbar-expand-lg navbar-light bg-light borderNav">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Le Monde</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link class="nav-link afrique" to="/Afrique">Afrique</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link asie" to="/Asie">Asie</router-link>
						</li>

						<li class="nav-item">
							<router-link class="nav-link europe" to="/Europe">Europe</router-link>
						</li>
					</ul>
					<form class="d-flex">
						<input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Recherche" />
						<button class="btn btn-outline-success" type="submit">Recherche</button>
					</form>
				</div>
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
nav {
	padding: 0px;

	a {
		font-weight: bold;
		color: #000;
	}
}

.afrique {
	&.router-link-active {
		color: #18c368 !important;
	}
}
.asie {
	&.router-link-active {
		color: #d53e20 !important;
	}
}
.europe {
	&.router-link-active {
		color: #188dc3 !important;
	}
}

.borderNav {
	-webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 29px -22px rgba(128, 158, 255, 0.17);
	box-shadow: 0px 10px 18px -7px #000000, 5px 5px 29px -22px rgba(128, 158, 255, 0.17);
}
</style>
