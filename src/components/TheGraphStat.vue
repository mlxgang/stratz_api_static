<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { ref, watch } from 'vue';
import { getHeroName } from '../utils/getHeroName';

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

const props = defineProps({
  lastMatches: {
    type: Array<Object>
  }
})

// watch(props, (newLastMatches) => {
//   const test: IMatchResult[] = newLastMatches.lastMatches
//   data.value = []
//   for ( let i = 0; i < 9; i++ ) {
//     categories.value.push(getHeroName(test[i].heroID))
//     data.value.push(test[i].IMP)
//   }
// })

const categories = ref<Object[]>([])

const data = ref<Number[]>([])

const chartOptions = ref({
  chart: {
    id: 'basic-bar'
  },
  xaxis: {
    categories
  }
})
const series = [{
  name: 'series-1',
  data: data
}]

</script>

<template>
  <VueApexCharts :options="chartOptions" :series="series" type="bar" width="500"/>
</template>

<style scoped>
</style>