<template>
	<div class="container">
		<div class="card" style="width: 18rem">
			<!-- <img
				class="card-img-top"
				src="https://i.stack.imgur.com/y9DpT.jpg
"
				alt="Card image cap"
			/>
			<div class="card-body">
				<p class="card-text">nom de pays</p>
			</div> -->

			<router-link v-if="pays.translation.fr" :to="`/pays/${pays.name}}`"
				><img :src="pays.flag" alt="drapeau" class="card-img-top"
			/></router-link>
			<router-link v-else :to="`/pays/${pays.name}`"
				><img :src="pays.flag" class="card-img-top" alt="Undrapeau"
			/></router-link>
			<div class="card-body">
				<router-link class="link" v-if="pays.translation.fr" :to="`/pays/${pays.translation.br}`"
					><h3 class="cart-title text-center">{{ pays.name }}</h3></router-link
				>
				<router-link></router-link>
			</div>
		</div>
	</div>
</template>
<script>
// import axios from "axios";

export default {
	name: "CardContent",
	props: ["pays"],
};
</script>
<style scoped></style>
