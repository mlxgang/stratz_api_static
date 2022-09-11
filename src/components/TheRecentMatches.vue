<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { IMatch } from '../interfaces/match.interface';
import { IMatchResult } from '../interfaces/matchResult.interface';
import GameResult from './MatchResult.vue';
import TheGraphStat from './TheGraphStat.vue';

const STRATZ_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTg5NzAwMzQ4MzYiLCJ1bmlxdWVfbmFtZSI6IijguIfvuKEnLSfvuKAp4LiHIiwiU3ViamVjdCI6IjNiYTJjNjJjLTM5ZWYtNDk2My1hYTczLWQ1NzE3MjE0YjE2MCIsIlN0ZWFtSWQiOiIxMDA5NzY5MTA4IiwibmJmIjoxNjYyNzM1MDMyLCJleHAiOjE2OTQyNzEwMzIsImlhdCI6MTY2MjczNTAzMiwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.gnpKWEr-ONCT3wHO3NdwyzzR0bC-hR7-rBoTk915sBw'
const baseURL = 'https://api.stratz.com'
const playerId = '1009769108'
const axiosConfig = {
  headers: { Authorization: `Bearer ${STRATZ_TOKEN}` }
}

const lastMatches = ref<IMatchResult[]>([])

onMounted(async () => {
  const response = await axios.get(`${baseURL}/api/v1/Player/${playerId}/matches`, axiosConfig)

  for ( let i in response.data ) {
    let testLastMatch: IMatch = response.data[i].players[0] // todo: rename test
    let testMatchResult: IMatchResult = {
      KDA: `${testLastMatch.numKills}/${testLastMatch.numDeaths}/${testLastMatch.numAssists}`,
      networth: testLastMatch.networth,
      level: testLastMatch.level,
      GPM: testLastMatch.goldPerMinute,
      damage: testLastMatch.heroDamage,
      towerDamage: testLastMatch.towerDamage,
      IMP: testLastMatch.imp
    }
    lastMatches.value.push(testMatchResult)
  }
})
</script>

<template>
  <h1>mlxgang dota stats</h1>
  <TheGraphStat :lastMatches="lastMatches"/>
  <div class="grid">
    <GameResult
        v-for="(matchResult, index) in lastMatches"
        :key="index"
        :GPM="matchResult.GPM"
        :IMP="matchResult.IMP"
        :KDA="matchResult.KDA"
        :damage="matchResult.damage"
        :level="matchResult.level"
        :networth="matchResult.networth"
        :towerDamage="matchResult.towerDamage"
    />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 320px 320px 320px 320px 320px;
}

</style>
