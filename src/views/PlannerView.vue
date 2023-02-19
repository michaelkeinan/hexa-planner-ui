<template>
  <div class="planner-view-container">
    <LineChart
      :labels="samplesTimestampsList"
      :datasetsList="materialsDatasetsList"
      class="line-chart-container"
    />
    <GanttChart class="gantt-container" />
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
  },

  computed: {
    ...mapState({
      samplesTimestampsList: (state) => state.inventory.samplesTimestampsList,
      materialValuesByName: (state) => state.inventory.materialValuesByName,
    }),
    materialsDatasetsList() {
      const materialsList = Object.keys(this.materialValuesByName).map(
        (materialName, index) => ({
          label: materialName,
          borderColor: COLORS_LIST[index],
          fill: false,
          data: this.materialValuesByName[materialName],
        })
      );
      return materialsList;
    },
  },

  methods: {
    ...mapActions(["fetchAndParseInventoryData"]),
  },
};
</script>

<style>
.planner-view-container {
  padding: 1em;
}
.line-chart-container {
  background-color: beige;
  border-radius: var(--border-radius-small);
}
.gantt-container {
  width: 100%;
  height: 40vh;
}
</style>
