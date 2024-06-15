<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-yellow-700">食材列表</h1>
		<div class="my-5">
			<input
				type="text"
				v-model="keyword"
				class="rounded w-full border-yellow-400 border-2"
				placeholder="搜尋主要食材"
				@change="searchMeals"
			/>
		</div>
		<!-- <hr class="h-px my-5 bg-yellow-700 border-0"> -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<router-link
				:to="{
					name: 'byIngredient',
					params: { ingredient: ing.strIngredient },
				}"
				v-for="ing of computedIngredient"
				:key="ing.idIngredient"
				class="block rounded p-3 mb-2 shadow bg-yellow-300"
			>
				<h3 class="text-2xl font-bold mb-2 text-yellow-700">
					{{ ing.strIngredient }}
				</h3>
			</router-link>
		</div>
		<div
			v-if="!computedIngredient.length"
			class="flex justify-center text-gray-600"
		>
			沒有資料
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import {Ingredient} from '../types';

const keyword = ref('');

const meals = computed<Ingredient[]>(() => store.state.mealsbyIngredientList);

const computedIngredient = computed(() => {
  return meals.value.filter((ing: Ingredient) =>
    ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  await store.dispatch('mealsByIngredientList', 'list');
});
</script>
<style></style>
