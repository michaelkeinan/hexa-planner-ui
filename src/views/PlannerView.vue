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
import GanttChart from "../components/GanttChart/GanttChart.vue";
import { COLORS_LIST } from "../common/helper.js";
import { generateChartDataset } from "../components/GanttChart/helper";

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
      recipesTimeAndDatePeriod: (state) => state.gantt.recipesTimeAndDatePeriod,
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
      return generateChartDataset(
        this.recipesTimeAndDatePeriod.startTimeAndDate,
        this.recipesTimeAndDatePeriod.endTimeAndDate,
        this.machineToRecipesMap
      );
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
  background-color: var(--color-cream);
  border-radius: var(--border-radius-small);
  box-shadow: var(--box-shadow);
}
.gantt-container {
  margin-top: 2em;
  width: 100%;
  border-radius: var(--border-radius-small);
  overflow: auto;
  box-shadow: var(--box-shadow);
}
</style>
