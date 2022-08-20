<template lang="html">
    <div class="bg-[#F5F6F7] py-20 px-5">
        <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">Recipe of The Moment <span
                v-if="loading || recipe !== null">😉</span> <span v-else>😟</span></h3>
        <div class="flex flex-col md:flex-row max-w-[1000px] mx-auto items-center gap-10"
            v-if="!loading && recipe !== null">

            <div class="flex-1">
                <h4 class="text-4xl font-bold mb-6">{{ recipe?.strMeal }}</h4>
                <div class=" justify-start">
                    <p class="text-green-900 mb-2 bg-green-50 border border-green-400 rounded-full w-fit px-5 py-1">
                        Instructions: </p>
                    <p class="text-lg">{{ recipe?.strInstructions.substring(0, 200) }}...</p>
                </div>
                <div class="mb-10 flex flex-wrap gap-5 mt-5"
                    v-if="recipe !== null">

                    <router-link :to="{ name: 'recipesCategories', params: { name: item.toLowerCase() } }"
                        class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
                        v-for="(item, index) in recipe?.strTags.split(',')"
                        :key="index">
                        {{ item }}</router-link>


                </div>
                <router-link
                    :to="{ name: 'recipesDetails', params: { id: `${recipe?.strMeal.toLowerCase().split(' ').join('-')}-${recipe?.idMeal}` } }"
                    class="bg-green-600 text-white px-8 py-4 rounded-lg  hover:bg-green-700 transition duration-300 ease-in-out">
                    More Recipe Details</router-link>
            </div>
            <div class="flex-1">
                <img :src="recipe?.strMealThumb"
                    alt=""
                    srcset=""
                    class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200  hover:border-[#F5F6F7]  hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95">

            </div>
        </div>

        <div v-if="loading"
            class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-circle-notch"
                class="text-green-600 text-7xl animate-spin py-10" />
        </div>

        <div v-if="!loading && recipe === null"
            class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5">
            <p class="text-3xl font-medium text-red-600">OOPS... Recipe Not Found 😟</p>
            <button
                class="bg-green-600 px-5 py-2 rounded text-white inline-flex gap-3 items-center hover:bg-green-700 transition ease-in-out duration-300"
                @click="$router.go(0)">
                <span>Please
                    Reload Page</span>
                <font-awesome-icon icon="fa-solid fa-circle-notch"
                    class="text-white" />
            </button>
        </div>


        {{}}
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { mealsDBDataType } from "../../data/dataTypes"
import axios from "axios";

export default defineComponent({
    data() {
        return {
            recipe: null as null | mealsDBDataType,
            loading: false
        }
    },

    created() {
        this.loading = true
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
                this.loading = false
                const meal: mealsDBDataType = response.data.meals[0]
                if (meal.strMeal) {
                    this.recipe = meal
                }

            })
            .catch(error => {
                this.loading = false
                console.log(error)
            })

    }
})
</script>