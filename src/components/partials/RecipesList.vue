<template lang="html">
    <div class="py-20 px-5">
        <div class="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-5">
            <div class="flex-1">
                <h3 class="text-5xl font-bold mb-4">Recipes For you</h3>
                <p class="text-lg">Loading Recipes from: <router-link
                        :to="{ name: 'recipesCategories', params: { name: $store.state.selectedCategory.strCategory.toLowerCase() } }"
                        class="bg-white text-green-600 border border-green-600 hover:border-green-700 px-5 py-1.5 rounded-full text-sm transition duration-300 ease-in-out">

                        {{ $store.state.selectedCategory.strCategory }} </router-link>
                </p>
            </div>


            <div class="flex-1">
                <select class="flex-1 block w-full mt-1 rounded-md  bg-gray-100 border  focus:border-gray-500 focus:bg-white focus:ring-0 cursor-pointer
                  "
                    v-model="tempCategory">
                    <option class="cursor-pointer"
                        v-for="(category, index) in $store.state.categories"
                        :key="index"
                        :value="category.strCategory">{{ category.strCategory }}</option>
                </select>

            </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20 max-w-[1100px] mx-auto pt-16"
            v-if="!loading && $store.state.currentRecipesList.length">
            <RecipeCard v-for="(item, index) in $store.state.currentRecipesList"
                :key="index"
                :recipe="item" />

        </div>

        <div v-if="loading"
            class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-circle-notch"
                class="text-green-600 text-7xl animate-spin py-10" />
        </div>

        <div v-if="!loading && !$store.state.currentRecipesList.length"
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

export default defineComponent({
    name: "RecipesList",
    data() {
        return {
            loading: false,
            tempCategory: this.$store.state.selectedCategory.strCategory
        };
    },
    watch: {
        tempCategory() {
            this.$store.commit("setSelectedCategory", this.tempCategory)
            this.loading = true;
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$store.state.selectedCategory.strCategory}`)
                .then(response => {
                    this.loading = false;
                    this.$store.commit("setCurrentRecipesList", response.data.meals);
                })
                .catch(error => {
                    this.loading = false;
                    console.log(error);
                });
        }
    },

    created() {
        if (!this.$store.state.featuredRecipes.length) {
            this.loading = true;
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$store.state.selectedCategory.strCategory}`)
                .then(response => {
                    this.loading = false;
                    this.$store.commit("setCurrentRecipesList", response.data.meals);
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