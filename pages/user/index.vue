<template>
<div class="z-50 w-full h-full flex flex-col justify-center">
  <div class="w-full flex justify-evenly items-center px-8 py-4">
    <div class="mx-auto h-full"></div>
    <h2 class="w-3/5 text-4xl font-medium mb-1 grid place-items-center">Loterie</h2>
    <div class="w-1/5 flex items-center">
      <p>{{ coin.amount }}</p>
      <img src="~/assets/img/coin.png" class="ml-2 mr-16 h-12" alt="Woot Coin" />
      <button>
        <svg class="svg-icon h-8" viewBox="0 0 20 20">
          <path
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z">
          </path>
        </svg>
      </button>
    </div>
  </div>
  <div class="w-full flex">
    <div class="mx-auto">
      <client-only>
        <div class="wrap">
          <Wheel :gift="gift" :imgParams="logo" @done="done" ref="wheel" v-model="data" />
        </div>
      </client-only>
    </div>
  </div>


  <button type="button"
    class="w-1/5 px-8 py-3 mb-4 mx-auto font-semibold border rounded border-indigo-400 text-indigo-500"
    @click="launchWheel">Launch wheel</button>
</div>
</template>

<script setup lang="ts">

import {definePageMeta, navigateTo, useSupabaseClient, useSupabaseUser} from "#imports";
import {useRoute} from "#app";
import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import { Wheel } from "vue3-fortune-wheel";
import type { Datas, imgParams } from "vue3-fortune-wheel";

const wheel = ref(null);
const data: Ref<any> = ref([{
  id: 1,
  value: "Gift 10 🪙",
  bgColor: "#7d7db3",
  color: "#ffffff",
},
{
  id: 2,
  value: "Gift 20 🪙🪙",
  bgColor: "#ffffff",
  color: "#000000",
},
{
  id: 3,
  value: "Gift 50 🪙🪙🪙",
  bgColor: "#c92729",
  color: "#ffffff",
},
{
  id: 4,
  value: "Gift 10 🪙",
  bgColor: "#7d7db3",
  color: "#ffffff",
},
{
  id: 5,
  value: "Gift 20 🪙🪙",
  bgColor: "#ffffff",
  color: "#000000",
},
{
  id: 6,
  value: "Gift 10 🪙🪙🪙",
  bgColor: "#7d7db3",
  color: "#ffffff",
},
{
  id: 7,
  value: "Gift 5 🪙",
  bgColor: "#fee083",
  color: "#ffffff",
}, {
  id: 8,
  value: "Gift 20 🪙🪙",
  bgColor: "#ffffff",
  color: "#ffffff",
}

]);
const done = (r: Datas) => {
  console.log("done", r);
};
const launchWheel = () => {
  wheel.value.spin();
};
const logo: imgParams = {
  src: "../assets/img/logo_notitle.png",
  width: 120,
  height: 120,
};
const gift = Math.floor(Math.random() * data.value.length) + 1;

definePageMeta({
  middleware: ["auth"]
});

const route = useRoute();
const client = useSupabaseClient();
const user = useSupabaseUser();


const {data: userRole} = await client.from('user_profile').select('role').eq('id', user.value.id).single();
const {data: roleAdmin} = await client.from('role').select('id').eq('name', 'admin').single();
const {data: roleUser} = await client.from('role').select('id').eq('name', 'user').single();

const { data: coin } = await client.from('wallet').select('amount').eq('user_id', user.value.id).single();

// if (userRole.role === roleAdmin.id && route.name.toString().startsWith('user')) {
//   navigateTo('/admin');
// }

// if (userRole.role === roleUser.id && route.name.toString().startsWith('admin')) {
//   navigateTo('/user');
// }
</script>

<style scoped>

</style>
