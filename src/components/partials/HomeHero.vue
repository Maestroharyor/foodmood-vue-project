<template lang="html">
    <div class="flex px-5 md:px-20 py-20 justify-between items-center relative mb-14">
        <div class="flex flex-col gap-10">
            <h2 class="text-6xl md:text-7xl font-bold"><span class="text-green-600">Let's Start <br />Cooking
                </span>With <br /> Popular Recipes</h2>
            <div class="text-xl">
                <p class="mb-1">Want to learn to cook but confused to start?</p>
                <p>No Need to worry again!</p>
            </div>
            <div class="flex flex-col md:flex-row gap-5 flex-wrap">
                <router-link to="/recipes"
                    class="bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition duration-300 ease-in-out text-center">
                    Browse Recipes</router-link>
                <router-link to="/download"
                    class="bg-white text-green-600 border-2 border-green-600 hover:border-green-700 px-8 py-4 rounded-lg text-xl transition duration-300 ease-in-out text-center">
                    Get App</router-link>
            </div>
        </div>
        <div class="hidden md:block">
            <img src="../../assets/foods/chicken-g754ef9688_640.jpg"
                alt=""
                srcset=""
                class="[clip-path:circle()] w-[600px]">
        </div>

        <div
            class="absolute right-[70px] bottom-[20px] shadow-xl bg-white px-5 py-4 w-[200px] hidden md:block hover:-translate-y-7 hover:-translate-x-5 transition duration-300 ease-in-out">
            <div class="flex items-center gap-2 mb-2">
                <img src="../../assets/foods/tiny-food-thumb-2.png"
                    alt=""
                    srcset=""
                    class="[clip-path:circle()] w-[53px]">
                <div>
                    <p class="font-bold text-sm mb-0.5">Fruit Salad</p>
                    <p class="text-sm">🔥 5.93</p>
                </div>
            </div>
            <div>
                <p class="text-gray-400 text-sm font-medium">Orange, Strawberry, Cerry, Blueberry, Kiwi</p>
            </div>
        </div>

        <div
            class="absolute right-[430px] bottom-[100px] shadow-xl bg-white px-5 py-4 w-[200px] hidden lg:block hover:-translate-y-3 transition duration-300 ease-in-out">
            <div class="flex items-center gap-2 mb-2">
                <img src="../../assets/foods/tiny-food-thumb-1.png"
                    alt=""
                    srcset=""
                    class="[clip-path:circle()] w-[53px]">
                <div>
                    <p class="font-bold text-sm mb-0.5">Fruit Sandwich</p>
                    <p class="text-sm">🔥 5.93</p>
                </div>
            </div>
            <div>
                <p class="text-gray-400 text-sm font-medium">Bread, Strawberry, Jam, Blueberry, Orange, Raspberry</p>
            </div>
        </div>
        <div
            class="bg-gray-200 h-[600px] w-[36%] 2xl:w-[40%] absolute top-[-100px] right-0 opacity-30 z-[-1] hidden md:block">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "HomeHeroView"
})
</script>
<style lang="">
    
</style>