<template lang="html">
    <div class="bg-white py-20 px-5 border-t">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto items-start gap-10"
            v-if="!loading && mealDetails !== null">

            <div class="">
                <h3 class="text-4xl font-bold mb-6">{{ mealDetails?.strMeal }}</h3>
                <div class="flex flex-col gap-3 mb-10">
                    <h6 class="font-bold text-xl">Ingredients:</h6>
                    <div class="flex flex-wrap gap-x-5 gap-y-5">
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient1">
                            {{ mealDetails.strIngredient1 }} - {{
                                    mealDetails.strMeasure1
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient2">
                            {{ mealDetails.strIngredient2 }} - {{
                                    mealDetails.strMeasure2
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient3">
                            {{ mealDetails.strIngredient3 }} - {{
                                    mealDetails.strMeasure3
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient4">
                            {{ mealDetails.strIngredient4 }} - {{
                                    mealDetails.strMeasure4
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient5">
                            {{ mealDetails.strIngredient5 }} - {{
                                    mealDetails.strMeasure5
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient6">
                            {{ mealDetails.strIngredient6 }} - {{
                                    mealDetails.strMeasure6
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient7">
                            {{ mealDetails.strIngredient7 }} - {{
                                    mealDetails.strMeasure7
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient8">
                            {{ mealDetails.strIngredient8 }} - {{
                                    mealDetails.strMeasure8
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient9">
                            {{ mealDetails.strIngredient9 }} - {{
                                    mealDetails.strMeasure9
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient10">
                            {{ mealDetails.strIngredient10 }} - {{
                                    mealDetails.strMeasure10
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient11">
                            {{ mealDetails.strIngredient11 }} - {{
                                    mealDetails.strMeasure11
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient12">
                            {{ mealDetails.strIngredient12 }} - {{
                                    mealDetails.strMeasure12
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient13">
                            {{ mealDetails.strIngredient13 }} - {{
                                    mealDetails.strMeasure13
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient14">
                            {{ mealDetails.strIngredient14 }} - {{
                                    mealDetails.strMeasure14
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient15">
                            {{ mealDetails.strIngredient15 }} - {{
                                    mealDetails.strMeasure15
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient16">
                            {{ mealDetails.strIngredient16 }} - {{
                                    mealDetails.strMeasure16
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient17">
                            {{ mealDetails.strIngredient17 }} - {{
                                    mealDetails.strMeasure17
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient18">
                            {{ mealDetails.strIngredient18 }} - {{
                                    mealDetails.strMeasure18
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient19">
                            {{ mealDetails.strIngredient19 }} - {{
                                    mealDetails.strMeasure19
                            }}</p>
                        <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm "
                            v-if="mealDetails.strIngredient20">
                            {{ mealDetails.strIngredient20 }} - {{
                                    mealDetails.strMeasure20
                            }}</p>
                    </div>

                </div>

                <div class=" justify-start">
                    <p
                        class="text-green-900 mb-2 bg-green-50 border border-green-400 rounded-full w-fit px-5 py-1 mt-5">
                        Instructions: </p>
                    <p class="text-lg"
                        v-html="mealDetails?.strInstructions"></p>
                </div>
                <p class="mt-5 font-bold">Category: </p>
                <div class="mb-10 flex flex-wrap gap-5 mt-3"
                    v-if="$store.state.recipeOfTheDay?.strCategory">

                    <router-link :to="{ name: 'recipesCategories', params: { name: item.toLowerCase() } }"
                        class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
                        v-for="(item, index) in $store.state.recipeOfTheDay?.strCategory.split(',')"
                        :key="index">
                        {{ item }}

                    </router-link>
                </div>

                <p class="mt-3 font-bold">Tags: </p>
                <div class="mb-10 flex flex-wrap gap-5 mt-3"
                    v-if="$store.state.recipeOfTheDay?.strTags">
                    <p :to="{ name: 'recipesCategories', params: { name: item.toLowerCase() } }"
                        class="text-white bg-green-600 border border-green-600 px-5 py-1.5 rounded-full text-sm"
                        v-for="(item, index) in $store.state.recipeOfTheDay?.strTags.split(',')"
                        :key="index">
                        {{ item }}</p>

                </div>

                <a :href="mealDetails.strYoutube"
                    target="_blank"
                    class="py-2 px-5 rounded bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out inline-flex items-center gap-5 text-white mt-5">
                    <font-awesome-icon icon="fa-solid fa-play"
                        class="" /><span>Watch on YouTube</span>
                </a>


            </div>
            <div class="sticky top-8">
                <img :src="mealDetails?.strMealThumb"
                    alt=""
                    srcset=""
                    class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200  hover:border-[#F5F6F7]  hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95">

            </div>

            <div class="md:col-span-2 border-t pt-5 border-gray-300">
                <h5 class="text-4xl font-bold mb-4">More Info:</h5>

                <div class="flex flex-col gap-3">
                    <h6 class="font-bold text-xl">Area of origin:</h6>
                    <p class="bg-green-600 text-white w-fit px-5 py-1.5 rounded-full text-sm ">
                        {{ mealDetails.strArea }}</p>
                </div>

            </div>
        </div>

        <div v-if="loading"
            class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-circle-notch"
                class="text-green-600 text-7xl animate-spin py-10" />
        </div>

        <div v-if="!loading && mealDetails === null"
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


    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { mealsDBDataType } from "@/data/dataTypes"


export default defineComponent({
    name: "RecipeDetailsInfo",

    data() {
        return {
            mealId: "",
            loading: false,
            mealDetails: null as null | mealsDBDataType
        }
    },
    watch: {
        '$route'(to, from, next) {

            if (to.name === "recipesDetails") {
                this.updateMealId(to.params.id)
                this.fetchRecipe()
            }

        }
    },
    created() {

        this.updateMealId(this.$router.currentRoute.value.params.id)
        this.fetchRecipe();
    },
    methods: {
        updateMealId(params: string | string[]) {
            const mealIdFromRouter = params as string;
            const mealIDArray = mealIdFromRouter.split("-")
            this.mealId = mealIDArray[mealIDArray.length - 1]
        },
        fetchRecipe() {
            this.loading = true
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`)
                .then(response => {
                    this.loading = false

                    if (response.data.meals !== null) {
                        const meal: mealsDBDataType = response.data.meals[0]
                        if (meal.strMeal) {
                            this.mealDetails = meal
                        }
                    } else {
                        alert("That meals doesn't exist")
                        this.$router.push("/404")
                    }


                })
                .catch(error => {
                    this.loading = false
                    // console.log({ error })

                })
        }
    },


})
</script>
