<script lang="ts" setup>
import { getHeroName } from '../utils/getHeroName'
import { getHeroLocaleName } from '../utils/getHeroLocaleName'
import ItemImage from './ItemImage.vue';

interface IMatchResult {
  matchId: number,
  heroId: number;
  KDA: string;
  networth: number;
  level: number;
  GPM: number;
  damage: number;
  towerDamage: number;
  IMP: number;
  item0Id?: number;
  item1Id?: number;
  item2Id?: number;
  item3Id?: number;
  item4Id?: number;
  item5Id?: number;
}

const imageURL = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/'

const props = defineProps<IMatchResult>();

function getIMPColor(IMP: number) {
  if ( IMP > 0 ) {
    return { color: 'green' };
  } else {
    return { color: 'red' };
  }
}
</script>

<template>
  <router-link :to="`/match/${props.matchId}`">
    <tr class="match">
      <td>
        <img :alt="getHeroLocaleName(props.heroId)"
             :src="`${imageURL}/heroes/${getHeroName(props.heroId)}.png`"
             class="hero-image"/>
      </td>
      <td>
        <span :style="getIMPColor(props.IMP)">{{ props.IMP }}</span>
      </td>
      <td>
        <span>{{ getHeroLocaleName(props.heroId) }}</span>
      </td>
      <td>
        <span>{{ props.level }}</span>
      </td>
      <td>
        <span>{{ props.KDA }}</span>
      </td>
      <td>
        <div class="items">
          <ItemImage :item="props.item0Id"/>
          <ItemImage :item="props.item1Id"/>
          <ItemImage :item="props.item2Id"/>
          <ItemImage :item="props.item3Id"/>
          <ItemImage :item="props.item4Id"/>
          <ItemImage :item="props.item5Id"/>
        </div>
      </td>
    </tr>
  </router-link>
</template>

<style scoped>
.match {
  display: grid;
  grid-template-columns: 101px 33px auto 48px 100px 114px;

  height: 56px;
  align-items: center;
  border: 1px solid aliceblue;
}

.hero-image {
  height: 40px;
}

.items {
  display: grid;
  grid-template-columns: 28px 28px 28px;
}

td {
  margin: 0 15px;
}
</style>
