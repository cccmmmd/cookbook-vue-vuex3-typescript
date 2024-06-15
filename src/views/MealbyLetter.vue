<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4 text-yellow-700">
			搜尋料理開頭字母
		</h1>
		<div class="flex gap-2 justify-center">
			<router-link
				:to="{ name: 'byLetter', params: { letter } }"
				v-for="letter of letters"
				:key="letter"
			>
				<template v-if="route.params.letter == letter">
					<span class="text-yellow-600 font-bold">
						{{ letter }}
					</span>
				</template>
				<template v-else>
					{{ letter }}
				</template>
			</router-link>
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
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Mealitem from "../components/Mealitem.vue";
import { Recipe } from '../types/Recipe';


const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed<Recipe[]>(() => store.state.mealsbyLetter);

const mealsapi = () => {
	if (route.params.letter) {
		store.dispatch("searchMealsbyLetter", route.params.letter);
	} else {
		store.dispatch("searchMealsbyLetter", "A");
	}
};

watch(route, () => {
	mealsapi();
});

onMounted(() => {
	mealsapi();
});
</script>
<style></style>
