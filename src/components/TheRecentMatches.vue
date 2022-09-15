<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { IMatchResult } from "../interfaces/matchResult.interface";
import MatchResult from "./MatchResult.vue";
import TheGraphStat from '../components/TheGraphStat.vue'

const baseURL = "https://api.stratz.com";
const playerId = "1009769108";
const player1Id = "1187184697";
const axiosConfig = {
  headers: { Authorization: `Bearer ${import.meta.env.VITE_STRATZ_TOKEN}` },
};

const lastMatch = ref<IMatchResult>({
  matchId: 0,
  heroId: 1,
  KDA: `0/0/0`,
  networth: 0,
  level: 1,
  GPM: 1,
  damage: 0,
  towerDamage: 0,
  IMP: 0,
  item0Id: 1,
  item1Id: 1,
  item2Id: 1,
  item3Id: 1,
  item4Id: 1,
  item5Id: 1,
});
const lastMatches = ref<IMatchResult[]>([]);

onMounted(async () => {
  const { data } = await axios.get(
    `${baseURL}/api/v1/Player/${player1Id}/matches`,
    axiosConfig
  );

  for (let i in data) {
    let response = data[i].players[0]; // todo: refactor to function
    lastMatches.value.push({
      matchId: response.matchId,
      heroId: response.heroId,
      KDA: `${response.numKills}/${response.numDeaths}/${response.numAssists}`,
      networth: response.networth,
      level: response.level,
      GPM: response.goldPerMinute,
      damage: response.heroDamage,
      towerDamage: response.towerDamage,
      IMP: response.imp,
      item0Id: response.item0Id,
      item1Id: response.item1Id,
      item2Id: response.item2Id,
      item3Id: response.item3Id,
      item4Id: response.item4Id,
      item5Id: response.item5Id,
    });
  }
  lastMatch.value = lastMatches.value[0];
});
</script>

<template>
  <h1>mlxgang dota stats</h1>
  <TheGraphStat :lastMatches="lastMatches" />
  <div class="matches">
    <div class="grid">
      <div></div>
      <span>Уровень исполнения</span>
      <span>Герой</span>
      <span>Уровень</span>
      <span>K/D/A</span>
      <span>Предметы</span>
    </div>
    <MatchResult
        v-for="(match, index) in lastMatches"
        :key="index"
        :matchId="match.matchId"
        :heroId="match.heroId"
        :GPM="match.GPM"
        :IMP="match.IMP"
        :KDA="match.KDA"
        :damage="match.damage"
        :level="match.level"
        :networth="match.networth"
        :towerDamage="match.towerDamage"
        :item0Id="match.item0Id"
        :item1Id="match.item1Id"
        :item2Id="match.item2Id"
        :item3Id="match.item3Id"
        :item4Id="match.item4Id"
        :item5Id="match.item5Id"
    />
  </div>
</template>

<style scoped>
.matches {
  display: flex;
  flex-direction: column
}
.grid {
  display: grid;
  grid-template-columns: 101px 33px auto 48px 100px 114px;
}
</style>
