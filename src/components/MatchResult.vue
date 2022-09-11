<script setup lang="ts">
import {defineProps} from 'vue'

// export interface Props {
//   KDA: String,
//   networth: Number,
//   level: Number,
//   GPM: Number,
//   damage: Number,
//   towerDamage: Number,
//   IMP: Number
// }

const props = defineProps({
  KDA: String,
  networth: String,
  level: Number,
  GPM: String,
  damage: String,
  towerDamage: String,
  IMP: Number
})

function IMPcolor(IMP: Number) { // todo: вынести в отдельный компонент
  if (IMP > 0) {
    return {color: 'green'}
  } else {
    return {color: 'red'}
  }
}
</script>

<template>
  <div > <!-- todo: вынести в отдельный компонент -->
    <ul>
      <li>K/D/A: {{ props.KDA}}</li>
      <li>Общая ценность: {{ props.networth }}</li>
      <li>Уровень: {{ props.level }}</li>
      <li>Золота в минуту: {{ props.GPM }}</li>
      <li>Урон: {{ props.damage }}</li>
      <li>Урон по постройкам: {{ props.towerDamage }}</li>
      <li :style="IMPcolor(props.IMP)">Уровень исполнения: {{ props.IMP }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>