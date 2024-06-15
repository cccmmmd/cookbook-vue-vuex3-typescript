<template>
	<a
		:href="href"
		target="_blank"
		class="inline-block px-3 py-2 text-red-600 rounded border-2 border-red-400 hover:bg-red-400 hover:text-white"
	>
		<slot></slot>
	</a>
</template>
<script setup lang="ts">
const props = defineProps<{
		href: string,
	}>();

</script>
