<template lang="html">
    <DefaultLayout>
        <div>
            <HomeFoodOfTheDay />
        </div>
    </DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
import HomeFoodOfTheDay from '@/components/partials/HomeFoodOfTheDay.vue';
export default defineComponent({
    name: "RecipesView",
    components: { DefaultLayout, HomeFoodOfTheDay }
})
</script>