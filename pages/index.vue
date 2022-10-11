<template>
  <div class="w-full h-full flex justify-center items-center font-sans">
    <form class="w-1/4 flex flex-col" @submit.prevent="login">
      <label for="email" class="font-medium">Email :</label>
      <input type="email" id="email" name="email" placeholder="nom.prenom@mail.com" class="p-1 mb-8 mt-2 rounded border-2 border-gray-300 outline-none transition duration-250 focus:border-gray-500" v-model="credentials.email">
      <label for="password" class="font-medium">Mot de passe :</label>
      <input type="password" id="password" name="password" class="p-1 mt-2 rounded border-2 border-gray-300 outline-none transition duration-250 focus:border-gray-500" v-model="credentials.password">
      <button type="submit" class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 hover:text-white hover:bg-indigo-400">Se connecter</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {definePageMeta, useSupabaseClient} from "#imports";
import 'mosha-vue-toastify/dist/style.css';
import { createToast } from 'mosha-vue-toastify';

definePageMeta({
  middleware: ["auth"]
});

const credentials = reactive({
  email: "",
  password: "",
});

const client = useSupabaseClient();

const login = async () => {
  const {error} = await client.auth.signIn({
    email: credentials.email,
    password: credentials.password,
  });
  if (error) {
    createToast(error.message, {
      type: 'danger',
      position: 'top-right',
      timeout: 5000,
    });
  }
};
</script>

<style scoped>

</style>
