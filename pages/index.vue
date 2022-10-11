<template>
  <div class="w-full h-full flex justify-center items-center font-sans">
    <Form class="w-1/4 flex flex-col" @submit="login" v-slot="{ meta }">
      <div class="mb-8 mt-2 flex flex-col">
        <label for="email" class="font-medium">Email :</label>
        <Field type="email" id="email" name="email" placeholder="nom.prenom@mail.com"
               class="p-1 rounded border-2 outline-none transition duration-250"
               rules="required|email" v-slot="{ field, meta }">
          <input v-bind="field" class="p-1 rounded border-2 outline-none transition duration-250"
                 :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        </Field>
        <ErrorMessage name="email" class="text-red-600"/>
      </div>
      <div class="mt-2 flex flex-col">
        <label for="password" class="font-medium">Mot de passe :</label>
        <Field type="password" id="password" name="password"
               class="p-1 rounded border-2 outline-none transition duration-250"
               rules="required" v-slot="{ field, meta }">
          <input v-bind="field" class="p-1 rounded border-2 outline-none transition duration-250"
                 :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        </Field>
        <ErrorMessage name="password" class="text-red-600"/>
      </div>
      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 hover:text-white hover:bg-indigo-400" :disabled="meta.dirty">
        Se connecter
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta, useSupabaseClient} from "#imports";
import 'mosha-vue-toastify/dist/style.css';
import {createToast} from 'mosha-vue-toastify';
import {Form, Field, ErrorMessage} from 'vee-validate';

definePageMeta({
  middleware: ["auth"]
});

const client = useSupabaseClient();

const login = async (values) => {
  const {error} = await client.auth.signIn({
    email: values.email,
    password: values.password,
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
