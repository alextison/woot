import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas, faRocket, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {defineNuxtPlugin} from "#app";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(faRocket)
library.add(faPaperPlane)
library.add(far)

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
