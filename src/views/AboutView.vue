<template lang="html">
  <DefaultLayout>
    <AboutHero />
    <AboutDetails />
  </DefaultLayout>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import AboutHero from "@/components/partials/AboutHero.vue";
import AboutDetails from "@/components/partials/AboutDetails.vue";

export default defineComponent({
  name: "AboutView",
  components: { DefaultLayout, AboutHero, AboutDetails },
});
</script>
