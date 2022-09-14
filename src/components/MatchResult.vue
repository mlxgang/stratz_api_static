<script lang="ts" setup>
import { getHeroName } from '../utils/getHeroName';
import { getHeroLocaleName } from '../utils/getHeroLocaleName';
import { getItemName } from '../utils/getItemName'
import ItemIcon from './ItemIcon.vue';

interface IMatchResult {
  heroId: number,
  KDA: string,
  networth: number,
  level: number,
  GPM: number,
  damage: number,
  towerDamage: number,
  IMP: number,
  items: number[]
}

const props = defineProps<IMatchResult>()

function getIMPColor(IMP: number) {
  if (IMP > 0) {
    return { color: 'green' }
  } else {
    return { color: 'red' }
  }
}
</script>

<template>
  <tr class="match">
    <td><img
        :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${getHeroName(props.heroId)}.png`"
        :alt="getHeroLocaleName(props.heroId)" class="hero-image" /></td>
    <td><span>{{ getHeroLocaleName(props.heroId) }}</span></td>
    <td><span>{{ props.level }}</span></td>
    <td><span>{{ props.KDA }}</span></td>
    <td>
      <!-- <ItemIcon v-for="(id, index) in props.items" :key="index" :id=id /> -->
    </td>
  </tr>
</template>

<style scoped>
.match {
  height: 56px;
}

.hero-image {
  height: 40px;
}
</style>