import { categoryData } from "@/data/data";
import {
  categoryDataType,
  mealsDBDataType,
  mealsFromCatDataType,
} from "@/data/dataTypes";
import { createStore } from "vuex";

export interface storeState {
  recipeOfTheDay: null | mealsDBDataType;
  categories: categoryDataType[];
  selectedCategory: categoryDataType;
  featuredRecipes: mealsFromCatDataType[];
}

export default createStore<storeState>({
  state: {
    recipeOfTheDay: null as null | mealsDBDataType,
    categories: categoryData,
    selectedCategory: categoryData[
      Math.floor(Math.random() * categoryData.length)
    ] as categoryDataType,
    featuredRecipes: [] as mealsFromCatDataType[],
  },
  getters: {},
  mutations: {
    setRecipeOfTheDay(state, recipe: mealsDBDataType) {
      state.recipeOfTheDay = recipe as mealsDBDataType;
    },
  },
  actions: {},
  modules: {},
});
