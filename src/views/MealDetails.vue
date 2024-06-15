<template>
	<div class="p-8 pt-3">
		<a @click="goBack" class="text-yellow-700 block py-2 cursor-pointer">
			< 上一頁</a
		>
		<div class="max-w-[800px] mx-auto py-4">
			<h1 class="text-yellow-700 text-5xl font-bold mb-5">
				{{ meal.strMeal }}
			</h1>
			<img
				:src="meal.strMealThumb"
				:alt="meal.strMeal"
				class="max-w-100"
			/>
			<div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
				<div><strong>Category:</strong> {{ meal.strCategory }}</div>
				<div><strong>Area:</strong> {{ meal.strArea }}</div>
				<div><strong>Tags:</strong> {{ meal.strTags }}</div>
			</div>
			<div class="my-3">
				{{ meal.strInstructions }}
			</div>
			<div class="grid grid-cols-4">
				<div>
					<h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
					<ul>
						<template v-for="n in 20" :key="n">
							<li v-if="meal[`strIngredient${n}`]">
								{{ n }}. {{ meal[`strIngredient${n}`] }}
							</li>
						</template>
					</ul>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-3">Measures</h2>
					<ul>
						<template v-for="n in 20" :key="n">
							<li
								v-if="
									meal[`strMeasure${n}`] &&
									meal[`strMeasure${n}`] !== ' '
								"
							>
								{{ meal[`strMeasure${n}`] }}
							</li>
						</template>
					</ul>
				</div>
			</div>
			<div class="mt-4">
				<YoutubeButton :href="meal.strYoutube"
					>去 Youtube</YoutubeButton
				>
				<a
					:href="meal.strSource"
					target="_blank"
					class="inline-block ml-3 px-3 py-2 rounded text-indigo-600 border-2 border-indigo-400 hover:bg-indigo-400 hover:text-white"
				>
					食譜來源
				</a>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeBtn.vue";
import {Recipe} from '../types';


const router = useRouter();
const route = useRoute();
const meal = ref<Recipe>({});

onMounted(() => {
	try {
		axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
			meal.value = data.meals[0] || {};
			// commit('setSearchMeals', data.meals)
		});
	} catch (error) {
		console.error("Error fetching meal details:", error);
	}
});
const goBack = () => {
	router.go(-1);
};
</script>
