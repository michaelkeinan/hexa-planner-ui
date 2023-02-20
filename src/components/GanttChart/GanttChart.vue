<template>
  <g-gantt-chart
    :chart-start="myChartStart"
    :chart-end="myChartEnd"
    :grid="grid"
    :hide-timeaxis="hideTimeaxis"
    :push-on-overlap="pushOnOverlap"
    :highlighted-hours="highlightedHours"
    :row-label-width="`${rowLabelWidth}%`"
    :row-height="rowHeight"
    :theme="selectedTheme"
  >
    <g-gantt-row
      v-for="row in rows"
      :key="row.label"
      :label="row.label"
      :bars="row.bars"
      bar-start="myStart"
      bar-end="myEnd"
    >
      <template #bar-label="{ bar }">
        <span>{{ bar.label }}</span>
      </template>
    </g-gantt-row>
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
    return {
      ...this.ganttDataset,
      pushOnOverlap: true,
      grid: true,
      rowHeight: 40,
      rowLabelWidth: 15,
      hideTimeaxis: false,
      highlightedHours: [10, 12],
      selectedTheme: "creamy",
      themes: [
        "default",
        "vue",
        "dark",
        "material-blue",
        "creamy",
        "slumber",
        "sky",
        "crimson",
        "grove",
        "fuchsia",
        "flare",
      ],
    };
  },
};
</script>
