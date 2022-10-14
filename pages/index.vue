<template>
  <div class="w-full h-full flex justify-center items-center font-sans">
    <password-modification :show-modal="showModal" @close="showModal = false" />
    <Form class="w-1/4 flex flex-col" @submit="login" v-slot="{ meta }">
      <div class="mb-8 mt-2 flex flex-col">
        <label for="email" class="font-medium">Email :</label>
        <Field type="email" id="email" name="email" placeholder="nom.prenom@mail.com"
               class="p-1 rounded border-2 outline-none transition duration-250"
               rules="required|email" v-slot="{ field, meta }">
          <input v-bind="field" type="email" class="p-1 rounded border-2 outline-none transition duration-250"
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
          <input v-bind="field" type="password" class="p-1 rounded border-2 outline-none transition duration-250"
                 :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        </Field>
        <ErrorMessage name="password" class="text-red-600"/>
      </div>
      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 disabled:opacity-50"
              :class="{'hover:text-white': meta.touched, 'hover:bg-indigo-400': meta.touched}" :disabled="!meta.touched">
        Se connecter
        <font-awesome-icon icon="fa-solid fa-rocket" />
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {definePageMeta, onMounted, ref, useSupabaseClient, useSupabaseUser} from "#imports";
import 'mosha-vue-toastify/dist/style.css';
import {createToast} from 'mosha-vue-toastify';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {navigateTo} from "#app";
import {Ref} from "vue";

definePageMeta({
  middleware: ["auth"]
});

const showModal: Ref<Boolean> = ref(false);

const roleDetection = async (user) => {
  const {data: userRole} = await client.from('user_profile').select('role').eq('id', user.value.id).single();
  const {data: roleAdmin} = await client.from('role').select('id').eq('name', 'admin').single();
  const {data: roleUser} = await client.from('role').select('id').eq('name', 'user').single();
  const {data: profileUser} = await client.from('user_profile').select('firsttime').eq('id', user.value.id).single();

  if (profileUser.firsttime === true) {
    showModal.value = true;
  } else {
    if (userRole.role === roleAdmin.id) {
      navigateTo('/admin');
    }

    if (userRole.role === roleUser.id) {
      navigateTo('/user');
    }
  }
};

const client = useSupabaseClient();
const user = useSupabaseUser();

onMounted(async () => {
  if (user.value) {
    await roleDetection(user);
  }
});

const login = async (values) => {
  const {error, user: signedUser} = await client.auth.signIn({
    email: values.email,
    password: values.password,
  });

  if (error) {
    createToast(error.message, {
      type: 'danger',
      position: 'top-right',
      timeout: 5000,
    });
  } else {
    user.value = signedUser;

    await roleDetection(user);
  }
};
</script>

<style scoped>

</style>
