import axiosClient from "../axiosClient";

export function categories({commit}){
	axiosClient.get("/categories.php").then(({ data }) => {
		commit("setCategory", data.categories);
	});
}

export function searchMeals({ commit }, keyword) {
	axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
		commit("setSearchMeals", data.meals);
	});
}

export function searchMealsbyLetter({ commit }, letter) {
	axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
		commit("setMealsbyLetter", data.meals);
	});
}

export function mealsByIngredientList({ commit }, ing) {
	axiosClient.get(`list.php?i=${ing}`).then(({ data }) => {
		commit("setMealsbyIngredientList", data.meals);
	});
}

export function searchMealsbyIngredient({ commit }, ing) {
	axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
		commit("setMealsbyIngredient", data.meals);
	});
}

export function searchMealsbyCategory({ commit }, cate) {
	axiosClient.get(`filter.php?c=${cate}`).then(({ data }) => {
		commit("setMealsbyCategory", data.meals);
	});
}
