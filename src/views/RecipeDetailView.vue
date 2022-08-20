<template lang="">
<DefaultLayout>
        <div>
        <p>Recipes Details here</p>
    </div>
</DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    name: "RecipesDetailsView",
    components: { DefaultLayout }
})
</script>