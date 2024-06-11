<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-0 text-yellow-700">料理分類</h1>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
			<template
				v-for="meal of categories"
				:key="meal.idCategory"
			>
				<div class="bg-white shadow rounded-xl">
					<router-link
						:to="{
							name: 'byCategory',
							params: { category: meal.strCategory },
						}"
					>
						<img
							:src="meal.strCategoryThumb"
							alt="meal.strCategory"
							class="rounded-t-xl w-full h-52 object-cover"
						/>
						<div class="p-3">
							<h3 class="font-bold text-yellow-700">
								{{ meal.strCategory }}
							</h3>
						</div>
					</router-link>
				</div>
			</template>
		</div>
	</div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import store from "../store";

interface Category {
  idCategory: number;
  strCategory: string;
  strCategoryThumb: string;
}

const categories = computed<Category[]>(() => store.state.categories);

onMounted(async () => {
  await store.dispatch('categories');
});


</script>

