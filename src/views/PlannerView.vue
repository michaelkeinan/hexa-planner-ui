<template>
  <div class="planner-view-container">
    <LineChart
      :labels="samplesTimestampsList"
      :datasetsList="materialsDatasetsList"
      class="line-chart-container"
    />
    <GanttChart :ganttDataset="ganttChartDataset" class="gantt-container" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LineChart from "../components/LineChart.vue";
import GanttChart from "../components/GanttChart.vue";
import {} from "../common/helper.js";

import { COLORS_LIST } from "../common/helper.js";
export default {
  name: "PlannerView",

  components: {
    LineChart,
    GanttChart,
  },

  created() {
    this.fetchAndParseInventoryData();
    this.fetchAndParseGanttData();
  },

  computed: {
    ...mapState({
      samplesTimestampsList: (state) => state.inventory.samplesTimestampsList,
      materialValuesByName: (state) => state.inventory.materialValuesByName,
      machineToRecipesMap: (state) => state.gantt.machineToRecipesMap,
    }),
    materialsDatasetsList() {
      const materialsDatasets = Object.keys(this.materialValuesByName).map(
        (materialName, index) => ({
          label: materialName,
          borderColor: COLORS_LIST[index],
          fill: false,
          data: this.materialValuesByName[materialName],
        })
      );
      return materialsDatasets;
    },
    ganttChartDataset() {
      const ganttDataset = {
        rows: [],
      };
      for (const machine in this.machineToRecipesMap) {
        const machineToAdd = {
          label: machine,
          bars: this.machineToRecipesMap[machine].map((recipe) => ({
            myStart: recipe.start,
            myEnd: recipe.end,
          })),
        };
        ganttDataset.rows = [...ganttDataset.rows, machineToAdd];
      }
      return ganttDataset;
    },
  },

  methods: {
    ...mapActions(["fetchAndParseInventoryData", "fetchAndParseGanttData"]),
  },
};
</script>

<style>
.planner-view-container {
  padding: 1.5em;
}
.line-chart-container {
  background-color: beige;
  border-radius: var(--border-radius-small);
}
.gantt-container {
  margin-top: 2em;
  width: 100%;
  border-radius: var(--border-radius-small);
}
</style>
