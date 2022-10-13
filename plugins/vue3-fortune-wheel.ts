import {defineNuxtPlugin} from "#app";
import { Wheel } from 'vue3-fortune-wheel';

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('wheel', Wheel, {});
})
