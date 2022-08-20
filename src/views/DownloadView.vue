<template lang="html">
    <DefaultLayout>
        <div>
            <DownloadHero />
        </div>
    </DefaultLayout>

</template>



<script lang="ts">
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { defineComponent } from 'vue'
import DownloadHero from '@/components/partials/DownloadHero.vue';
export default defineComponent({
    name: "DownloadView",
    components: { DefaultLayout, DownloadHero }
})
</script>