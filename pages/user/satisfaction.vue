<template>
  <div class="flex justify-center p-3">
    <h1 class="text-5xl ">Retrospective</h1>

  </div>
  <Form class="flex justify-center p-3" @submit="submit" v-slot="{ meta }">
    <div
        class="flex justify-center flex-col max-w-2xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:text-gray-700  bg-slate-50">
      <div class="padding-left">
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Entente générale :</span>
          <Field as="vue3-star-ratings" name="entente" rules="required|min:1" :showControl="false" starSize="24"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Condition de travail :</span>
          <Field as="vue3-star-ratings" name="work" rules="required|min:1" :showControl="false" starSize="24"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Bien-être :</span>
          <Field as="vue3-star-ratings" name="wellbeing" rules="required|min:1"
                 :showControl="false" starSize="24"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Motivation :</span>
          <Field as="vue3-star-ratings" name="motivation" rules="required|min:1"
                 :showControl="false" starSize="24"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Entente hiérarchie :</span>
          <Field as="vue3-star-ratings" name="hierarchicalagreement" rules="required|min:1"
                 :showControl="false" starSize="24"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
      </div>

      <span>
            J'aimerais ajouter un commentaire :
        </span>
      <Field as="textarea" name="comment" class="bg-gray-300 rounded-lg" rows="4" cols="50"></Field>

      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 disabled:opacity-50"
              :class="{'hover:text-white': meta.valid,
              'hover:bg-indigo-400': meta.valid}"
              :disabled="!meta.valid">
        Envoyer
        <font-awesome-icon icon="fa-solid fa-paper-plane"/>
      </button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form, Field} from 'vee-validate';
import {useSupabaseClient, useSupabaseUser, navigateTo} from "#imports";
import {useRoute} from "#app";
import 'mosha-vue-toastify/dist/style.css';
import {createToast} from 'mosha-vue-toastify';

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

const alreadyDone = async () => {
  const today = new Date();
  function getFirstDayOfWeek(d) {
    // 👇️ clone date object, so we don't mutate it
    const date = new Date(d);
    const day = date.getDay(); // 👉️ get day of week

    // 👇️ day of month - day of week (-6 if Sunday), otherwise +1
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);

    return new Date(date.setDate(diff));
  }

  const from_date = getFirstDayOfWeek(today);

  const to_date = new Date(from_date);
  to_date.setDate(to_date.getDate() + 6);
  const from_date_formatted = from_date.toISOString().split('T')[0];
  const to_date_formatted = to_date.toISOString().split('T')[0];
  const {data, error} = await client.from('feedbackform').select('user_id,comment').gte('created_at', from_date_formatted).lte('created_at', to_date_formatted);
  if (error) {
    console.log(error);
  }

  return data.length > 0;
}

if (await alreadyDone()) {
  createToast('Vous avez déjà rempli le formulaire cette semaine', {
    type: 'warning',
    position: 'top-right',
    timeout: 5000,
    onClose: () => {
      navigateTo('/user');
    }
  });
}

const submit = async (values) => {
  const {error} = await client.from('feedbackform').insert([
    {
      ...values,
      user_id: user.value.id,
      created_at: new Date(),
    },
  ]);

  if (error) {
    createToast(error.message, {
      type: 'danger',
      position: 'top-right',
      timeout: 5000,
    });
  } else {
    createToast('Merci pour votre retour !', {
      type: 'success',
      position: 'top-right',
      timeout: 2000,
      onClose: () => {
        navigateTo('/user');
      },
    });
  }
};

</script>

<style scoped>

</style>
