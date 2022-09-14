<script setup lang="ts">
import { getItemName } from '../utils/getItemName';


const props = defineProps(['id'])
</script>

<template>
    <img :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${getItemName(props.id)}.png`"
        :alt="getItemName(props.id)" class="hero-image" />
</template>