<template>
    <div class="w-full h-full flex justify-center  font-sans">
      <div class="w-4/5 flex flex-col justify-center items-center text-center">
        <div class="w-full flex justify-evenly">
          <div class="w-2/5 py-2 px-5 bg-slate-300">
            <h2 class="text-2xl">LeaderBoard</h2>
            <div>
              <div class="flex justify-center my-3 bg-white">
                <p class="mr-3">Michel</p>
                <span>150 points</span>
              </div>
              <div class="flex justify-center my-3 bg-white">
                <p class="mr-3">Patrick</p>
                <span>130 points</span>
              </div>
              <div class="flex justify-center my-3 bg-white">
                <p class="mr-3">Bernard</p>
                <span>90 points</span>
              </div>
            </div>
          </div>
          <div class="w-2/5 py-2 px-5 bg-slate-300">
            <h2 class="text-2xl">Retrospectives</h2>
            <div>
              <a href="" class="flex justify-center my-3 bg-white">
                <p>Michel</p>
                <span class="mx-3">150 points</span>
                <svg class="svg-icon w-6" viewBox="0 0 20 20">
                  <path fill="black" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
                  <circle fill="black" cx="9.98" cy="9.446" r="1.629"></circle>
                </svg>
              </a>
              <a href="" class="flex justify-center my-3 bg-white">
                <p>Patrick</p>
                <span class="mx-3">130 points</span>
                <svg class="svg-icon w-6" viewBox="0 0 20 20">
                  <path fill="black" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
                  <circle fill="black" cx="9.98" cy="9.446" r="1.629"></circle>
                </svg>
              </a>
              <a href="" class="flex justify-center my-3 bg-white">
                <p>Bernard</p>
                <span class="mx-3">90 points</span>
                <svg class="svg-icon w-6" viewBox="0 0 20 20">
                  <path fill="black" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
                  <circle fill="black" cx="9.98" cy="9.446" r="1.629"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-evenly my-16">
          <a href="" class="w-1/5 py-1 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 hover:text-white hover:bg-indigo-400">Évenement</a>
          <a href="" class="w-1/5 py-1 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 hover:text-white hover:bg-indigo-400">Boutique</a>
          <button class="w-1/5 py-1 rounded border-2 border-indigo-400 text-indigo-500 transition duration-250 hover:text-white hover:bg-indigo-400" @click="showModal = true">Créer un compte</button>
          <account-creation :show-modal="showModal" @close="showModal = false"/>
        </div>
        <div class="w-full flex flex-col items-center">
          <h2 class="text-xl font-semibold mb-1">Note générale</h2>
          <div class="flex">
            <svg class="svg-icon w-7" viewBox="0 0 20 20">
							<path fill="#818cf8" stroke="#818cf8" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
						</svg>
            <svg class="svg-icon w-7" viewBox="0 0 20 20">
							<path fill="#818cf8" stroke="#818cf8" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
						</svg>
            <svg class="svg-icon w-7" viewBox="0 0 20 20">
							<path fill="#818cf8" stroke="#818cf8" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
						</svg>
            <svg class="svg-icon w-7" viewBox="0 0 20 20">
							<path fill="grey" stroke="grey" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
						</svg>
            <svg class="svg-icon w-7" viewBox="0 0 20 20">
							<path fill="grey" stroke="grey" d="M16.85,7.275l-3.967-0.577l-1.773-3.593c-0.208-0.423-0.639-0.69-1.11-0.69s-0.902,0.267-1.11,0.69L7.116,6.699L3.148,7.275c-0.466,0.068-0.854,0.394-1,0.842c-0.145,0.448-0.023,0.941,0.314,1.27l2.871,2.799l-0.677,3.951c-0.08,0.464,0.112,0.934,0.493,1.211c0.217,0.156,0.472,0.236,0.728,0.236c0.197,0,0.396-0.048,0.577-0.143l3.547-1.864l3.548,1.864c0.18,0.095,0.381,0.143,0.576,0.143c0.256,0,0.512-0.08,0.729-0.236c0.381-0.277,0.572-0.747,0.492-1.211l-0.678-3.951l2.871-2.799c0.338-0.329,0.459-0.821,0.314-1.27C17.705,7.669,17.316,7.343,16.85,7.275z M13.336,11.754l0.787,4.591l-4.124-2.167l-4.124,2.167l0.788-4.591L3.326,8.5l4.612-0.67l2.062-4.177l2.062,4.177l4.613,0.67L13.336,11.754z"></path>
						</svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {definePageMeta, navigateTo, ref, useSupabaseClient, useSupabaseUser} from "#imports";
import {useRoute} from "#app";
import AccountCreation from "~/components/accountCreation.vue";
import {Ref} from "vue";

definePageMeta({
  middleware: ["auth"]
});

const route = useRoute();
const client = useSupabaseClient();
const user = useSupabaseUser();

const showModal: Ref<Boolean> = ref(false);

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
