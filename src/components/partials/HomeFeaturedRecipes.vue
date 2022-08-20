<template lang="html">
    <div class="bg-[#F5F6F7]  mt-10 py-20 px-5">
        <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">Featured Recipes</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto pt-8"
            v-if="!loading && recipes.length">
            <RecipeCard v-for="(item, index) in recipes"
                :key="index"
                :recipe="item" />

        </div>

        <div v-if="loading"
            class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-circle-notch"
                class="text-green-600 text-7xl animate-spin py-10" />
        </div>

        <div v-if="!loading && !recipes.length"
            class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5">
            <p class="text-3xl font-medium text-red-600">OOPS... Featured Recipes Not Loading 😟</p>
            <button
                class="bg-green-600 px-5 py-2 rounded text-white inline-flex gap-3 items-center hover:bg-green-700 transition ease-in-out duration-300"
                @click="$router.go(0)">
                <span>Please
                    Reload Page</span>
                <font-awesome-icon icon="fa-solid fa-circle-notch"
                    class="text-white" />
            </button>
        </div>

        <div class="flex items-center justify-center mt-12">
            <router-link to="/recipes"
                class="bg-white text-green-600 border-2 border-green-600 hover:border-green-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center hover:text-green-700">
                See More Recipes</router-link>
        </div>
    </div>
</template>


<script lang="ts">
import { mealsFromCatDataType } from '@/data/dataTypes';
import { defineComponent } from 'vue'
import axios from 'axios';
import RecipeCard from '../cards/RecipeCard.vue';

export default defineComponent({
    name: "HomeFeaturedRecipes",
    components: { RecipeCard },
    data() {
        return {
            recipes: [] as mealsFromCatDataType[],
            loading: false,
        }
    },
    created() {
        this.loading = true
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(response => {
                this.loading = false
                this.recipes = response.data.meals.slice(0, 3)
            })
            .catch(error => {
                this.loading = false
                console.log(error)
            })
    }
})
</script>