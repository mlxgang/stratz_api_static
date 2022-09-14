<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { IMatchResult } from '../interfaces/matchResult.interface';
import GameResult from './MatchResult.vue';
import TheGraphStat from './TheGraphStat.vue';

const baseURL = 'https://api.stratz.com'
const playerId = '1009769108'
const player1Id = '1187184697'
const axiosConfig = {
  headers: { Authorization: `Bearer ${import.meta.env.VITE_STRATZ_TOKEN}` }
}

const lastMatch = ref<IMatchResult>({
  heroId: 1,
  KDA: `0/0/0`,
  networth: 0,
  level: 1,
  GPM: 1,
  damage: 0,
  towerDamage: 0,
  IMP: 0,
  items: [
    0, 0, 0, 0, 0, 0
  ]
})
const lastMatches = ref<IMatchResult[]>([])

onMounted(async () => {
  const { data } = await axios.get(`${baseURL}/api/v1/Player/${player1Id}/matches`, axiosConfig)

  for ( let i in data ) {
    let response = data[i].players[0] // todo: rename test
    lastMatches.value.push({
      heroId: response.heroId,
      KDA: `${response.numKills}/${response.numDeaths}/${response.numAssists}`,
      networth: response.networth,
      level: response.level,
      GPM: response.goldPerMinute,
      damage: response.heroDamage,
      towerDamage: response.towerDamage,
      IMP: response.imp,
      items: [
       response.item0Id,
       response.item1Id,
       response.item2Id,
       response.item3Id,
       response.item4Id,
       response.item5Id,
      ]
    })
  }
  lastMatch.value = lastMatches.value[0]
})
</script>

<template>
  <h1>mlxgang dota stats</h1>
  <table>
    
  </table>
  <TheGraphStat :lastMatches="lastMatches"/>
  <div class="grid">
    <GameResult
        v-for="(matchResult, index) in lastMatches"
        :key="index"
        :heroId="matchResult.heroId"
        :GPM="matchResult.GPM"
        :IMP="matchResult.IMP"
        :KDA="matchResult.KDA"
        :damage="matchResult.damage"
        :level="matchResult.level"
        :networth="matchResult.networth"
        :towerDamage="matchResult.towerDamage"
        :items="matchResult.items"
    />
  </div>

</template>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
}
</style>
