<template>
<div>
  user
</div>
</template>

<script setup lang="ts">

import {definePageMeta, navigateTo, useSupabaseClient, useSupabaseUser} from "#imports";
import {useRoute} from "#app";

definePageMeta({
  middleware: ["auth"]
});

const route = useRoute();
const client = useSupabaseClient();
const user = useSupabaseUser();

const {data: userRole} = await client.from('user_profile').select('role').eq('id', user.value.id).single();
const {data: roleAdmin} = await client.from('role').select('id').eq('name', 'admin').single();
const {data: roleUser} = await client.from('role').select('id').eq('name', 'user').single();

if (userRole.role === roleAdmin.id && route.name.toString().startsWith('user')) {
  navigateTo('/admin');
}

if (userRole.role === roleUser.id && route.name.toString().startsWith('admin')) {
  navigateTo('/user');
}
</script>

<style scoped>

</style>
