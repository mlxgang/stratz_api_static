<script lang="ts" setup>
import { onMounted } from 'vue'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const props = defineProps({
  lastMatches: Object
})

onMounted(() => {
  const labels: String[] = []
  const graphData: Number[] = []

  const config = {
    type: 'line',
    labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      graphData,
    }]
  };

  for ( let i in props.lastMatches ) {
    labels.push(props.lastMatches[i].KDA);
    graphData.push(props.lastMatches[i].IMP)
  }

  const ctx = document.getElementById('chart') as HTMLCanvasElement
  new Chart(
      ctx,
      config
  );
})
</script>

<template>
  <div class="chart-container">
    <canvas id="chart"></canvas>
  </div>
</template>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
}
</style>