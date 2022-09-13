<script lang="ts" setup>
// import { getHeroName } from '../utils/getHeroName';
import * as test from '../assets/heroes';
import { IHero } from '../interfaces/hero.interface';
import { onMounted } from 'vue';

interface IMatchResult {
  heroID: Number,
  KDA: String,
  networth: Number,
  level: Number,
  GPM: Number,
  damage: Number,
  towerDamage: Number,
  IMP: Number
}

const props = defineProps<IMatchResult>()

function getIMPСolor(IMP: Number) {
  if ( IMP > 0 ) {
    return { color: 'green' }
  } else {
    return { color: 'red' }
  }
}

// function getHeroName(id: Number) {
//   heroes.heroes.find((hero: IHero) => {
//     return hero.id === id
//   })
// }


</script>

<template>
  <div>
    <ul>
      <li>Герой: {{ props.heroID }}</li>
      <li>K/D/A: {{ props.KDA }}</li>
      <li>Общая ценность: {{ props.networth.toLocaleString('ru') }}</li>
      <li>Уровень: {{ props.level }}</li>
      <li>Золота в минуту: {{ props.GPM.toLocaleString('ru') }}</li>
      <li>Урон: {{ props.damage.toLocaleString('ru') }}</li>
      <li>Урон по постройкам: {{ props.towerDamage.toLocaleString('ru') }}</li>
      <li :style="getIMPСolor(props.IMP)">Уровень исполнения: {{ props.IMP }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>