<template lang="html">
    <router-link
        :to="{ name: 'recipesDetails', params: { id: `${recipeItem.strMeal.toLowerCase().split(' ').join('-')}-${recipeItem.idMeal}` } }"
        class="bg-white shadow-lg flex flex-col gap-5 rounded overflow-hidden hover:-translate-y-4 transition duration-300 ease-in-out justify-between">
        <div class="flex-1">
            <img :src="recipeItem.strMealThumb"
                alt=""
                srcset=""
                class="h-48 object-cover w-full">
        </div>
        <div class="py-4 px-5 flex-1 flex flex-col justify-between">
            <h4 class="text-2xl font-bold mb-5 text-center">{{ recipeItem.strMeal }}</h4>


            <router-link
                :to="{ name: 'recipesDetails', params: { id: `${recipeItem.strMeal.toLowerCase().split(' ').join('-')}-${recipeItem.idMeal}` } }"
                class="bg-green-600 text-white px-8 py-4 rounded-lg  hover:bg-green-700 transition duration-300 ease-in-out w-full mb-5 block text-center">
                See Recipe Details</router-link>

        </div>

    </router-link>
</template>


<script lang="ts">
import { mealsFromCatDataType } from '@/data/dataTypes';
import { defineComponent } from 'vue'
export default defineComponent({
    name: "RecipeCard",
    props: ['recipe'],
    data() {
        return {
            recipeItem: this.recipe as mealsFromCatDataType
        }

    }
})
</script>