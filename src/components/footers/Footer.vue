<template lang="">
  <footer class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 py-20 max-w-[1200px] mx-auto gap-10 border-t px-5">
    <div class="flex flex-col gap-4 md:col-span-4">
       <h4 class="text-3xl font-bold text-gray-500">
        Food<span class="text-green-500">Mood</span>
      </h4>
      <p>FoodMood is an application used to find a variety of famous foods and recipes.</p>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2">
      <h4 class="text-3xl font-bold text-gray-700">
        Company
      </h4>
      <div class="flex flex-col gap-3">
        <router-link
          to="/"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >About</router-link
        >
        <router-link
          to="/recipes"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Recipes</router-link
        >
        <router-link
          to="/download"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Download</router-link
        >
        <router-link
          to="/contact"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Contact</router-link
        >
      </div>
    </div>
    <div class="flex flex-col gap-4 md:col-span-2">
      <h4 class="text-3xl font-bold text-gray-700">
        Support
      </h4>
      <div class="flex flex-col gap-3">
        <a
          to="#"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Account</a
        >
        <a
          to="#"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Support Center</a
        >
        <a
          to="#"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Feedback</a
        >
        <a
          to="#"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >Accessibility</a
        >
        <a
          to="#"
          class="font-[400] text-lg hover:text-green-700 transition duration-300 ease-in-out"
          >FAQs</a
        >
      </div>
    </div>

    <div class="flex flex-col gap-4 md:col-span-4">
      <h4 class="text-3xl font-bold text-gray-700">
        Company
      </h4>
      <div>
        <p>Question of Feedback?</p>
        <p>We'd love to hear from you</p>
      </div>
    </div>
  </footer >
  <div class="bg-green-600 text-white text-center py-3 px-5">
    <p>&copy; FoodMood by <a href="https://ayomideodewale.com" class="underline text-yellow-100 font-bold">Maestro</a> - {{new Date().getFullYear()}}. <span>Inspiration drawn from <a href="https://dribbble.com/shots/15223754-Food-Cooking-Inspiration-Website/attachments/6970440?mode=media" class="underline text-yellow-100 font-bold">Maulana Lufti's FoodMood</a> </span></p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
  components: {},
});
</script>
