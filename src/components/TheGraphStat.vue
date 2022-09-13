<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { onMounted, PropType } from 'vue';

interface IMatchResult {
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
    type: Array as PropType<Array<IMatchResult>>
  }
})

const chartOptions = {
  chart: {
    id: 'basic-bar'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}
const series = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}]
// for (let i in props.lastMatches.length) {
//   console.log(props.lastMatches[i].KDA)
// }
//
// console.log(props.lastMatches)

onMounted(() => {
  console.log(props.lastMatches[0])
  // todo: watch for props
})

</script>

<template>
  <VueApexCharts width="500" type="line" :options="chartOptions" :series="series"/>
</template>

<style scoped>
</style>