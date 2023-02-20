<template>
  <g-gantt-chart :chart-start="myChartStart" :chart-end="myChartEnd">
    <g-gantt-row
      v-for="row in rows"
      :key="row.label"
      :label="row.label"
      :bars="row.bars"
      bar-start="myStart"
      bar-end="myEnd"
    />
  </g-gantt-chart>
</template>

<script>
import { GGanttChart, GGanttRow } from "vue-ganttastic";

export default {
  name: "GanttChart",
  
  props: {
    ganttDataset: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    GGanttChart,
    GGanttRow,
  },

  data() {
    return this.ganttDataset
      // myChartStart: "2020-03-01 00:00",
      // myChartEnd: "2020-03-03 00:00"
  },
};
</script>

<style>
#g-gantt-chart {
  background-color: beige !important;
}
#g-timeaxis {
  background-color: beige !important;
}
.g-gantt-row-label {
  background-color: beige !important;
}
</style>
