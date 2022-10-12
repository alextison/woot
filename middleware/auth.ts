import {defineNuxtRouteMiddleware, useSupabaseUser} from "#imports";
import {navigateTo} from "#app";

export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();

    // Listen to Supabase auth changes
    if (!user.value && to.path !== '/') {
        navigateTo('/');
    }
});
