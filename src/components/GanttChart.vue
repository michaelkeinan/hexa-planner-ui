<template>
  <svg id="gantt"></svg>
</template>

<script>
import Gantt from "frappe-gantt";

export default {
  name: "GanttChart",

  created() {
    var tasks = [
      {
        id: "Task 1",
        name: "Redesign website",
        start: "2016-12-28",
        end: "2016-12-31",
        progress: 20,
        dependencies: "Task 2, Task 3",
      },
    ];
    new Gantt("#gantt", tasks);
  },
};
</script>
