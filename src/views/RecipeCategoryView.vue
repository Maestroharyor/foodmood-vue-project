<template lang="html">
    <DefaultLayout>
        <div class="bg-[#F5F6F7] py-20 px-5"
            v-if="categoryDetails">
            <h3 class="mx-auto text-center px-5 text-4xl md:text-5xl mb-10 font-bold">Viewing
                {{ categoryDetails?.strCategory }}
                <span>😁</span>
            </h3>
            <div class="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center gap-20">

                <div class="flex-1">
                    <h4 class="text-4xl font-bold mb-6">More About <span class="text-green-600">{{
                            categoryDetails?.strCategory
                    }}</span></h4>
                    <div class=" justify-start">

                        <p class="text-lg leading-loose">{{ categoryDetails?.strCategoryDescription }}</p>
                    </div>


                    <p class="mt-3 font-bold">Tags: </p>
                    <div class="mb-10 flex flex-wrap gap-5 mt-3"
                        v-if="$store.state.recipeOfTheDay?.strTags">
                        <p :to="{ name: 'recipesCategories', params: { name: item.toLowerCase() } }"
                            class="text-white bg-green-600 border border-green-600 px-5 py-1.5 rounded-full text-sm"
                            v-for="(item, index) in $store.state.recipeOfTheDay?.strTags.split(',')"
                            :key="index">
                            {{ item }}</p>

                    </div>

                </div>
                <div class="flex-1">
                    <img :src="categoryDetails?.strCategoryThumb"
                        alt=""
                        srcset=""
                        class="rounded-tl shadow-[20px_20px_0px_2px_rgba(21,128,61,0.95)] border-4 border-gray-200  hover:border-[#F5F6F7]  hover:rounded hover:shadow-[0px_0px_0px_10px_rgba(21,128,61,0.95)] transition duration-400 cursor-pointer hover:scale-95 w-full">

                </div>
            </div>



        </div>
        <RecipeCategoryList />
    </DefaultLayout>


</template>


<script lang="ts">
import { defineComponent } from 'vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import { categoryDataType } from '@/data/dataTypes';
import RecipeCategoryList from '../components/partials/RecipeCategoryList.vue';
export default defineComponent({
    components: { DefaultLayout, RecipeCategoryList },
    data() {
        return {
            categoryDetails: this.$store.state.categories.filter(category => category.strCategory.toLowerCase() ===
                this.$router.currentRoute.value.params.name)[0] as categoryDataType
        }
    },
    created() {
        console.log(this.$router.currentRoute.value.params.name)

    }
})
</script>