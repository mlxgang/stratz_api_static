<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { IMatch } from '../interfaces/match.interface';
import { IMatchResult } from '../interfaces/matchResult.interface';
import GameResult from './MatchResult.vue';
import { Chart } from 'chart.js';

const baseURL = 'https://api.stratz.com'
const playerId = '1009769108'
const axiosConfig = {
  headers: { Authorization: `Bearer ${STRATZ_TOKEN}` }
}

const lastMatches = ref<IMatchResult[]>([])

onMounted(async () => {
  const response = await axios.get(`${baseURL}/api/v1/Player/${playerId}/matches`, axiosConfig)

  for (let i in response.data) {
    let testLastMatch: IMatch = response.data[i].players[0] // todo: rename test
    let testMatchResult: IMatchResult = {
      KDA: `${testLastMatch.numKills}/${testLastMatch.numDeaths}/${testLastMatch.numAssists}`,
      networth: testLastMatch.networth.toLocaleString('ru'),
      level: testLastMatch.level,
      GPM: testLastMatch.goldPerMinute.toLocaleString('ru'),
      damage: testLastMatch.heroDamage.toLocaleString('ru'),
      towerDamage: testLastMatch.towerDamage.toLocaleString('ru'),
      IMP: testLastMatch.imp
    }
    lastMatches.value.push(testMatchResult)
  }
})

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
  labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};

const ctx = document.getElementById('chart') as HTMLCanvasElement

// const chart = new Chart(
//     ctx,
//     data
// )
</script>

<template>
  <h1>mlxgang dota stats</h1>
  <canvas id="chart"></canvas>
  <div class="grid">
    <GameResult
      v-for="(matchResult, index) in lastMatches"
      :key="index"
      :KDA="matchResult.KDA"
      :networth="matchResult.networth"
      :level="matchResult.level"
      :GPM="matchResult.GPM"
      :damage="matchResult.damage"
      :towerDamage="matchResult.towerDamage"
      :IMP="matchResult.IMP"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 320px 320px 320px 320px 320px;
}
</style>
