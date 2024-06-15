<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-0 text-yellow-700">搜尋料理名稱</h1>
		<div class="py-5">
			<input
				type="text"
				v-model="keyword"
				class="rounded border-2 border-gray-200 w-full"
				placeholder="輸入料理名稱英文"
				@change="searchMeals"
			/>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
			<Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
		</div>
		<div v-if="!meals.length" class="flex justify-center text-gray-600">
			沒有資料
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Mealitem from "../components/Mealitem.vue";
import {Recipe} from '../types';

const route = useRoute();
const keyword = ref<string>("");
const meals = computed<Recipe[]>(() => store.state.searchMeals);

function searchMeals() {
	store.dispatch("searchMeals", keyword.value ? keyword.value : "All");
}

onMounted(() => {
	keyword.value = route.params.name as string;
	searchMeals();
});
</script>
<style></style>
