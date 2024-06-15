<template>
	<div class="bg-white shadow rounded-xl">
		<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
			<img
				:src="meal.strMealThumb"
				alt="meal.strMeal"
				class="rounded-t-xl w-full h-52 object-cover"
			/>
		</router-link>
		<div class="p-3">
			<h3 class="font-bold text-yellow-700">{{ meal.strMeal }}</h3>
			<p class="mb-4 truncate ..." v-if="meal.strInstructions">
				{{ meal.strInstructions }}
			</p>
			<div class="py-3 flex justify-between">
				<YoutubeButton v-if="meal.strYoutube" :href="meal.strYoutube"
					>Youtube</YoutubeButton
				>
				<router-link
					:to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
					class="px-3 py-2 text-blue-600 rounded border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
					>更多</router-link
				>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import YoutubeButton from "../components/YoutubeBtn.vue";
import { PropType } from "vue";
import { Recipe } from '../types/Recipe';

const { meal } = defineProps({
	meal: {
		required: true,
		type: Object as PropType<Recipe>,
	},
});
</script>
