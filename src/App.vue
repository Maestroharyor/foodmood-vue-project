<template>

  <router-view />
</template>

<script lang="ts">
export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'FoodMood',
    // all titles will be injected into this template
    titleTemplate: '%s | Get all the recipe you need'
  }
}
</script>

<style>
nav a.router-link-exact-active {
  color: #1d774e;
}
</style>
