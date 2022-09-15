<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const baseURL = 'https://api.stratz.com'; // todo: что нибудь сделать с повторением кода
const axiosConfig = {
  headers: { Authorization: `Bearer ${import.meta.env.VITE_STRATZ_TOKEN}` },
};

const imageURL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/'
const route = useRoute()
let matches = ref([])

async function getData() {
  const { data } = await axios.get(`${baseURL}/api/v1/match/${route.params.id}`, axiosConfig)
  matches = data.players
}

onMounted(async () => {
  await getData()
})
</script>

<template>
  <router-link :to="{name: 'Recent matches'}">go home</router-link>
  <img :src="`${imageURL}/heroes/${matches[0].heroId}.png`"/>
</template>