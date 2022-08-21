<template lang="html">
    <DefaultLayout>
        <div>
            <HomeFoodOfTheDay />
            <RecipesList />
            <HomeFeaturedRecipes />
        </div>
    </DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
import HomeFoodOfTheDay from '@/components/partials/HomeFoodOfTheDay.vue';
import HomeFeaturedRecipes from '@/components/partials/HomeFeaturedRecipes.vue';
import RecipesList from '@/components/partials/RecipesList.vue';
export default defineComponent({
    name: "RecipesView",
    components: { DefaultLayout, HomeFoodOfTheDay, HomeFeaturedRecipes, RecipesList }
})
</script>