<template lang="html">
    <DefaultLayout>
        <div>
            <ContactHero />

        </div>
    </DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
import ContactHero from '@/components/partials/ContactHero.vue';
export default defineComponent({
    name: "ContactView",
    components: { DefaultLayout, ContactHero }
})
</script>