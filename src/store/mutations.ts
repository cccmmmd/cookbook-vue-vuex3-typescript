export function setCategory(state, categories) {
	state.categories = categories || [];
}

export function setSearchMeals(state, meals) {
	state.searchMeals = meals || [];
}

export function setMealsbyLetter(state, meals) {
	state.mealsbyLetter = meals || [];
}

export function setMealsbyIngredientList(state, meals) {
	state.mealsbyIngredientList = meals || [];
}

export function setMealsbyIngredient(state, meals) {
	state.mealsbyIngredient = meals || [];
}

export function setMealsbyCategory(state, meals) {
	state.mealsbyCategory = meals || [];
}
