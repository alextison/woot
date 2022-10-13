<template>
  <div class="flex justify-center p-3">
    <h1 class="text-5xl ">Retrospective</h1>

  </div>
  <Form class="flex justify-center p-3" @submit="submit" v-slot="{ meta }">
    <div
        class="flex justify-center flex-col max-w-2xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:text-gray-700  bg-slate-50">
        <span class="text-3xl">
            Description du formulaire
        </span>
      <div class="padding-left p-5">
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Entente générale :</span>
          <Field as="vue3-star-ratings" name="entente" rules="required|min:1" :showControl="false"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Condition de travail :</span>
          <Field as="vue3-star-ratings" name="work" rules="required|min:1" :showControl="false"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Bien-être :</span>
          <Field as="vue3-star-ratings" name="wellbeing" rules="required|min:1"
                 :showControl="false"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Motivation :</span>
          <Field as="vue3-star-ratings" name="motivation" rules="required|min:1"
                 :showControl="false"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
        <div class="rounded-lg p-1 m-2 flex items-center justify-end">
          <span class="mr-2">Entente avec la hiérarchie :</span>
          <Field as="vue3-star-ratings" name="ententeHierachie" rules="required|min:1"
                 :showControl="false"
                 style="margin: 0 !important; padding: 0 !important;"/>
        </div>
      </div>

      <span>
            J'aimerais ajouter un commentaire :
        </span>
      <Field as="textarea" name="commentaire" class="bg-gray-300 rounded-lg" rows="4" cols="50"></Field>

      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 disabled:opacity-50"
              :class="{'hover:text-white': meta.valid,
              'hover:bg-indigo-400': meta.valid}"
              :disabled="!meta.valid">
        Envoyer
        <font-awesome-icon icon="fa-solid fa-paper-plane" />
      </button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form, Field} from 'vee-validate';

const submit = (values) => {
  console.log(values);
};

</script>

<style scoped>

</style>
