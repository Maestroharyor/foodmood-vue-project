<template lang="html">
    <DefaultLayout>
        <div>
            <RecipeDetailsInfo />
            <HomeFeaturedRecipes />
            <hr>
            <HomeFoodOfTheDay />
        </div>
    </DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
import HomeFeaturedRecipes from '@/components/partials/HomeFeaturedRecipes.vue';
import HomeFoodOfTheDay from '@/components/partials/HomeFoodOfTheDay.vue';
import RecipeDetailsInfo from '@/components/partials/RecipeDetailsInfo.vue';
export default defineComponent({
    name: "RecipesDetailsView",

    components: { DefaultLayout, HomeFeaturedRecipes, HomeFoodOfTheDay, RecipeDetailsInfo }
})
</script>