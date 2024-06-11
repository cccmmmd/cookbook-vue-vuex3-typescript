<template>
	<div>
		<navbar />
		<main>
			<router-view />
		</main>
	</div>
</template>
<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>
