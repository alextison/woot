<template>
  <!-- only when fully loaded -->
  <NuxtLayout>
    <router-view />
  </NuxtLayout>
</template>

<script setup lang="ts">
import {required, email, min} from '@vee-validate/rules';
import {defineRule, configure} from 'vee-validate';
import {localize, setLocale} from '@vee-validate/i18n';
import fr from '@vee-validate/i18n/dist/locale/fr.json';

defineRule("required", required);

// Install email rule.
defineRule("email", email);

// Install min rule.
defineRule("min", min);

configure({
  generateMessage: localize({
    fr
  }),
});

setLocale('fr');
</script>
