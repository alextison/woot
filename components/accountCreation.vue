<template>
  <vue-final-modal v-model="showModal" content-class="p-2 rounded w-2/5"
                   :content-style="{backgroundColor: 'white', display: 'flex', justifyContent: 'center', minHeight: '43%', maxHeight: '60%'}"
                   :styles="{display: 'flex', justifyContent: 'center', alignItems: 'center'}" @closed="onClose">
    <Form class="flex flex-col w-10/12" v-slot="{ meta }" @submit="createAccount">
      <label for="email" class="font-medium">Email :</label>
      <Field name="email" label="Email" v-slot="{ errors, field, meta }" rules="required|email"
             class="p-1 rounded border-2 outline-none transition duration-250">
        <input v-bind="field" name="email" type="email"
               class="p-1 rounded border-2 outline-none transition duration-250"
               :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        <ErrorMessage :errors="errors" class="text-red-600" name="email"/>
      </Field>
      <label for="password" class="font-medium">Mot de passe :</label>
      <Field name="password" label="Mot de passe" v-slot="{ errors, field, meta }" rules="required"
             class="p-1 rounded border-2 outline-none transition duration-250">
        <input v-bind="field" name="password" type="password"
               class="p-1 rounded border-2 outline-none transition duration-250"
               :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        <ErrorMessage :errors="errors" class="text-red-600" name="password"/>
      </Field>
      <label for="role" class="font-medium">Rôle :</label>
      <Field name="role" label="Rôle" v-slot="{ errors, field, meta }" rules="required"
             class="p-1 rounded border-2 outline-none transition duration-250">
        <select v-bind="field" name="role" class="p-1 rounded border-2 outline-none transition duration-250"
                :class="{'border-red-300': !meta.valid && meta.touched,
                  'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
          <option v-for="role in roles" :value="role.name">{{ role.name }}</option>
        </select>
        <ErrorMessage :errors="errors" class="text-red-600" name="role"/>
      </Field>
      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 disabled:opacity-50"
              :class="{'hover:text-white': meta.touched, 'hover:bg-indigo-400': meta.touched}"
              :disabled="!meta.touched">
        Créer
        <font-awesome-icon icon="fa-solid fa-rocket"/>
      </button>
    </Form>
  </vue-final-modal>
</template>

<script setup lang="ts">
import {Form, Field, ErrorMessage} from 'vee-validate';
import {createToast} from "mosha-vue-toastify";
import {ref, useSupabaseClient} from "#imports";

const emit = defineEmits(['close']);
const client = useSupabaseClient();

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});

const onClose = () => {
  emit('close');
};

const {data: roles, error: rolesError} = await client.from('role').select('*');

if (rolesError) {
  createToast('Une erreur est survenue lors de la récupération des rôles', {
    type: 'danger',
    position: 'top-right',
    timeout: 5000,
  });
}

const createAccount = async (values: any) => {
  const {error, user: createdUser} = await client.auth.signUp({
    email: values.email,
    password: values.password,
  });

  if (error) {
    createToast(error.message, {
      type: 'danger',
      position: 'top-right',
      timeout: 5000,
    });
    onClose();
  }

  if (createdUser) {
    const {error: errorCreationUserProfile} = await client
      .from('user_profile')
      .insert([
        {
          id: createdUser.id,
          firsttime: false,
          role: roles.find((role: any) => role.name === values.role).id,
        },
      ]);

    if (errorCreationUserProfile) {
      createToast(errorCreationUserProfile.message, {
        type: 'danger',
        position: 'top-right',
        timeout: 5000,
      });
      onClose();
    }

    const {error: errorCreationWallet} = await client
      .from('wallet')
      .insert([
        {
          user_id: createdUser.id,
          amount: 0,
        },
      ]);

    if (errorCreationWallet) {
      createToast(errorCreationWallet.message, {
        type: 'danger',
        position: 'top-right',
        timeout: 5000,
      });
      onClose();
    }

    createToast('Le compte a bien été créé !', {
      type: 'success',
      position: 'top-right',
      timeout: 5000,
    });
    onClose();
  }
};
</script>

<style scoped>

</style>
