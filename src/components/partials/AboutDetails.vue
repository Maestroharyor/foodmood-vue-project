<template lang="html">
    <div class="bg-white mt-10 flex flex-col items-center justify-center py-16 px-5">
        <div class="mb-5 max-w-[700px] mx-auto text-center text-xl flex flex-col gap-y-5">
            <h3 class="text-5xl text-center font-bold mb-5">More About This Project</h3>
            <p class="text-center text-lg">So <a href="https://ayomideodewale.com"
                    target="_blank"
                    class="font-bold text-green-600 hover:text-green-700 transition duration-300 ease-in-out underline italic">
                    I pretty
                    much came up with this idea</a> while taking a break from the recipes mobile App I build with React
                Native.</p>
            <p>"Why not just build something similar with a free API with <span class="text-green-500 font-bold">Vue,
                    TypeScript,
                    TailwindCSS and VueX?</span> " I
                thought. "It'd be fun" I thought</p>
            <h4>Well Guess What?</h4>
            <p>It was fun! I love Vue (though use React more😉)</p>
        </div>
        <img src="../../assets/ayomide-odewale-maestro.png"
            alt=""
            srcset=""
            class="rounded w-64">
        <div
            class="bg-green-700 px-6  md:px-20 py-16 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out border-4 border-white text-white flex flex-col items-center justify-center gap-3">
            <h5 class="text-3xl font-bold">Want me to build something like this for you?</h5>
            <p class="mb-5">Beautiful, Intuitive, Super fast and Affordable with any stack needed?</p>
            <a href="https://ayomideodewale.com"
                target="_blank"
                class="bg-white text-green-600 border-2 border-green-600 hover:border-green-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center">
                Get In Touch</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "HomeDetails"
})
</script>
<style lang="">
    
</style>