<template>
	<nav>
		<WorldView />
	</nav>
	<router-view />
</template>

<script>
import WorldView from "./views/WorldView";

export default {
	name: "App",
	component: WorldView,
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
// base
* {
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}

html {
	// --res: calc(0.01 * 10vmin);
	font-size: clamp(13px, 5vw, 20px);
}
</style>
