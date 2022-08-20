<template lang="html">
    <div class="max-w-[1000px] mx-auto px-5 py-20 flex flex-col gap-4 items-center justify-center">
        <img src="../../assets/profile.svg"
            alt=""
            srcset=""
            class="max-w-[500px] mx-auto">
        <h3 class="text-5xl font-bold text-center mt-8 leading-normal">Love to hear from you <br> Get in Touch 👋</h3>

        <p class="md:w-[500px] text-center text-xl">So, given that this wasn't a planned project, I didn't think of
            hooking a
            form up with an
            API, a custom
            backend or doing anything fancy. </p>
        <p class="md:w-[500px] text-center text-xl mb-5">So, if you want to get in touch with me:</p>
        <a href="https://ayomideodewale.com"
            target="_blank"
            class="bg-green-600 text-white shadow hover:bg-green-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center hover:scale-105">
            Get In Touch Here</a>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "ContactHero"
})
</script>