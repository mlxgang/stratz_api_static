<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts'
import { ref, watch } from 'vue';
import { getHeroLocaleName } from '../utils/getHeroLocaleName';

interface IMatchResult {
  heroId: Number,
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

watch(props, (newLastMatches) => {
  const test: IMatchResult[] = newLastMatches.lastMatches // todo: solve issue
  for ( let i = 0; i < 9; i++ ) {
    categories.value.push(getHeroLocaleName(test[i].heroId))
    data.value.push(test[i].IMP)
  }
})

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
  <VueApexCharts :options="chartOptions" :series="series" type="bar" width="700"/>
</template>

<style scoped>
</style>