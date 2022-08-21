<template lang="html">
    <div class="py-20 px-5">
        <div class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5">
            <div class="flex-1">
                <h3 class="text-5xl font-bold mb-4 text-center">Recipes in {{ $router.currentRoute.value.params.name }}
                </h3>

            </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 max-w-[1100px] mx-auto pt-16"
            v-if="!loading && currentRecipeCategory.length">
            <RecipeCard v-for="(item, index) in currentRecipeCategory"
                :key="index"
                :recipe="item" />

        </div>

        <div v-if="loading"
            class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-circle-notch"
                class="text-green-600 text-7xl animate-spin py-10" />
        </div>

        <div v-if="!loading && !currentRecipeCategory.length"
            class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5">
            <p class="text-3xl font-medium text-red-600">OOPS... Recipes Not Loading 😟</p>
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
import RecipeCard from '../cards/RecipeCard.vue';
import { mealsFromCatDataType } from '@/data/dataTypes';

export default defineComponent({
    name: "RecipeCategoryList",
    data() {
        return {
            loading: false,
            currentRecipeCategory: [] as mealsFromCatDataType[]
        };
    },
    watch: {

        '$route'(to, from, next) {
            console.log(to.name)
            if (to.name === "recipesCategories") {
                this.fetchCategory()
            }

        },

    },

    created() {

        if (!this.currentRecipeCategory.length && !this.loading) {
            this.fetchCategory()
        }
    },
    methods: {
        fetchCategory() {
            this.loading = true;
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$router.currentRoute.value.params.name}`)
                .then(response => {
                    this.loading = false;
                    console.log(response.data)
                    if (response.data.meals !== null || response.data.meals !== undefined) {
                        this.currentRecipeCategory = response.data.meals
                    }
                    else {
                        this.$router.push("/404")
                    }

                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                });
        }
    },


    components: { RecipeCard }
})
</script>
<style lang="">
    
</style>