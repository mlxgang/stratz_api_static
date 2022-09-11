<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  KDA: String,
  networth: Number,
  level: Number,
  GPM: Number,
  damage: Number,
  towerDamage: Number,
  IMP: Number
})

function IMPcolor(IMP: Number) {
  if ( IMP > 0 ) {
    return { color: 'green' }
  } else {
    return { color: 'red' }
  }
}
</script>

<template>
  <div>
    <ul>
      <li>K/D/A: {{ props.KDA }}</li>
      <li>Общая ценность: {{ props.networth.toLocaleString('ru') }}</li>
      <li>Уровень: {{ props.level }}</li>
      <li>Золота в минуту: {{ props.GPM.toLocaleString('ru') }}</li>
      <li>Урон: {{ props.damage.toLocaleString('ru') }}</li>
      <li>Урон по постройкам: {{ props.towerDamage.toLocaleString('ru') }}</li>
      <li :style="IMPcolor(props.IMP)">Уровень исполнения: {{ props.IMP }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>