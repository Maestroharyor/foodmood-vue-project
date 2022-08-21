<template lang="html">
  <Header />
  <MobileHeader />
  <div class="min-h-[calc(100vh-300px)]">
    <slot></slot>
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../headers/Header.vue";
import Footer from "../footers/Footer.vue";
import MobileHeader from "../headers/MobileHeader.vue";
export default defineComponent({
  name: "DefaultLayout",
  components: { Header, Footer, MobileHeader },

});
</script>
