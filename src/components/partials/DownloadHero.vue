<template lang="html">
    <div class="relative px-5 overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between gap-5 max-w-[1000px] mx-auto py-20 ">
            <div class="flex-1">
                <img src="../../assets/mobile-app.png"
                    alt=""
                    srcset="">
            </div>
            <div class="flex-1 flex flex-col gap-4">
                <p class="bg-green-100 px-4 py-1 text-green-800 rounded-full w-fit font-medium">Download App</p>
                <h4 class="text-3xl md:text-5xl font-bold">Get The App</h4>
                <p class="text-lg text-gray-600 md:w-96">Our app is available on the Play Store and the App Store, you
                    can
                    download
                    it for a more
                    comfortable
                    experience.</p>
                <img src="../../assets/download-buttons.png"
                    alt=""
                    srcset=""
                    class="w-72">
            </div>
            <div
                class="bg-gray-200 h-[500px] w-[36%] 2xl:w-[40%] absolute top-[-100px] right-0 opacity-30 z-[-1] hidden md:block">
            </div>
        </div>
    </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "DownloadHero"
})
</script>