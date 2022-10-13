import { vfmPlugin } from 'vue-final-modal/lib'
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.use(vfmPlugin);
});
