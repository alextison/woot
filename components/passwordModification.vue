<template>
  <vue-final-modal v-model="showModal" content-class="p-2 rounded w-2/5"
                   :content-style="{backgroundColor: 'white', display: 'flex', justifyContent: 'center', minHeight: '43%', maxHeight: '60%'}"
                   :styles="{display: 'flex', justifyContent: 'center', alignItems: 'center'}" @closed="onClose"
                   :click-to-close="false">
    <Form class="flex flex-col w-10/12" v-slot="{ meta }" @submit="modifyPassword">
      <label for="password" class="font-medium">Mot de passe :</label>
      <Field name="password" label="Mot de passe" v-slot="{ errors, field, meta }" rules="required"
             class="p-1 rounded border-2 outline-none transition duration-250">
        <input v-bind="field" name="password" type="password"
               class="p-1 rounded border-2 outline-none transition duration-250"
               :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        <ErrorMessage :errors="errors" class="text-red-600" name="password"/>
      </Field>

      <label for="passwordconfirm" class="font-medium mt-2">Confirmation du mot de passe :</label>
      <Field name="passwordconfirm" label="Confirmation du mot de passe" v-slot="{ errors, field, meta }"
             rules="required|confirmed:@password"
             class="p-1 rounded border-2 outline-none transition duration-250">
        <input v-bind="field" name="passwordconfirm" type="password"
               class="p-1 rounded border-2 outline-none transition duration-250"
               :class="{'border-red-300': !meta.valid && meta.touched,
                 'focus:border-red-500': !meta.valid && meta.touched, 'border-gray-300': meta.valid,  'focus:border-gray-500': meta.valid}">
        <ErrorMessage :errors="errors" class="text-red-600" name="passwordconfirm"/>
      </Field>

      <button type="submit"
              class="p-1 mt-16 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 disabled:opacity-50"
              :class="{'hover:text-white': meta.touched, 'hover:bg-indigo-400': meta.touched}"
              :disabled="!meta.touched">
        Modifier le mot de passe
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

const modifyPassword = async (values: any) => {
  const {user, error} = await client.auth.update({password: values.password});

  if (error) {
    createToast('Une erreur est survenue lors de la modification du mot de passe', {
      type: 'danger',
      position: 'top-right',
      timeout: 5000,
    });
  } else {
    const {
      data: userProfile,
      error: userProfileError
    } = await client.from('user_profile').update({firsttime: false}).eq('id', user.id);

    if (userProfileError) {
      createToast('Une erreur est survenue lors de la modification du mot de passe', {
        type: 'danger',
        position: 'top-right',
        timeout: 5000,
      });
    } else {
      createToast('Mot de passe modifié avec succès', {
        type: 'success',
        position: 'top-right',
        timeout: 5000,
      });
      const {error: signOutError} = await client.auth.signOut();

      if (signOutError) {
        createToast('Une erreur est survenue lors de la déconnexion', {
          type: 'danger',
          position: 'top-right',
          timeout: 5000,
        });
      } else {
        onClose();
      }
    }
  }
};
</script>

<style scoped>

</style>
