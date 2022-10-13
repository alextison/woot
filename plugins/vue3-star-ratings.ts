import {defineNuxtPlugin} from "#app";
import vue3StarRatings from "vue3-star-ratings";

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('vue3-star-ratings', vue3StarRatings, {});
})
