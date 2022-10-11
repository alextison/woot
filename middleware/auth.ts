import {defineNuxtRouteMiddleware, useSupabaseUser} from "#imports";
import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();

    if (!user.value) {
        navigateTo('/login');
    }
});
