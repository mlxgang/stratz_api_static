<script lang="ts" setup>
import { getItemName } from '../utils/getItemName';

const imageURL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/'
const props = defineProps(['item'])
</script>

<template>
  <img
      v-if="item !== undefined" :alt="getItemName(item)"
      :src="`${imageURL+getItemName(item)}.png`"
      class="item-image"
  >
  <div v-else class="item-image empty"></div>
</template>

<style scoped>
.item-image {
  height: 20px;
}

.empty {
  height: 20px;
  width: 28px;
  background-color: #3a3a3a;
}
</style>