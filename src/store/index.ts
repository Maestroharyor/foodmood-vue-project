import { categoryData } from "@/data/data";
import {
  categoryDataType,
  mealsDBDataType,
  mealsFromCatDataType,
  storeState,
} from "@/data/dataTypes";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// define injection key
export const key: InjectionKey<Store<storeState>> = Symbol();

export const store = createStore<storeState>({
  state: {
    recipeOfTheDay: null as null | mealsDBDataType,
    categories: categoryData,
    selectedCategory: categoryData[
      Math.floor(Math.random() * categoryData.length)
    ] as categoryDataType,
    featuredRecipes: [] as mealsFromCatDataType[],
    currentRecipesList: [] as mealsFromCatDataType[],
  },
  getters: {
    getCategoryDetails(state, strCategory: string) {
      return state.categories;
    },
  },
  mutations: {
    setSelectedCategory(state, strCategory: string) {
      const newCategory = state.categories.filter(
        (category) =>
          category.strCategory.toLowerCase() === strCategory.toLowerCase()
      );
      state.selectedCategory = newCategory[0];
    },
    setRecipeOfTheDay(state, recipe: mealsDBDataType) {
      state.recipeOfTheDay = recipe;
    },
    setFeaturedRecipes(state, recipes: mealsDBDataType[]) {
      state.featuredRecipes = recipes;
    },
    setCurrentRecipesList(state, recipes: mealsDBDataType[]) {
      state.currentRecipesList = recipes;
    },
  },
  actions: {},
  modules: {},
});
