<template>
	<header
		class="bg-yellow-300 shadow-md h-24 flex justify-between items-stretch"
	>
		<router-link
			:to="{ name: 'home' }"
			class="text-2xl inline-flex items-center px-5 font-bold text-yellow-700"
		>
			異國料理食譜大全
		</router-link>
		<div class="flex items-center gap-1">
			<router-link
				:to="{ name: 'byName' }"
				class="font-bold text-yellow-700 inline-flex items-center px-2 h-full translation-colors hover:bg-yellow-100 hover:text-yellow-600"
				>依料理名稱尋找</router-link
			>
			<router-link
				:to="{ name: 'byLetter' }"
				class="font-bold text-yellow-700 inline-flex items-center px-2 h-full translation-colors hover:bg-yellow-100 hover:text-yellow-600"
				>依料理開頭字母尋找</router-link
			>
			<router-link
				:to="{ name: 'ingredients' }"
				class="font-bold text-yellow-700 inline-flex items-center px-2 h-full translation-colors hover:bg-yellow-100 hover:text-yellow-600"
				>依食材尋找</router-link
			>
		</div>
	</header>
</template>
