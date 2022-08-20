<template>
  <DefaultLayout>
    <HomeHero />
    <HomeFoodOfTheDay />
    <HomePopularFoods />
    <HomeFeaturedRecipes />
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import HomeHero from "@/components/partials/HomeHero.vue";
import HomePopularFoods from "@/components/partials/HomePopularFoods.vue";
import HomeFoodOfTheDay from "@/components/partials/HomeFoodOfTheDay.vue";
import HomeFeaturedRecipes from "@/components/partials/HomeFeaturedRecipes.vue";

export default defineComponent({
  name: "HomeView",
  components: { DefaultLayout, HomeHero, HomePopularFoods, HomeFoodOfTheDay, HomeFeaturedRecipes },
});
</script>
