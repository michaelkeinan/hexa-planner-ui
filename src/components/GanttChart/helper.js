import { COLORS_LIST } from "../../common/helper.js";

export const generateChartDataset = (
  startTimeAndDate,
  endTimeAndDate,
  machineToRecipesMap
) => {
  const ganttDataset = {
    myChartStart: startTimeAndDate,
    myChartEnd: endTimeAndDate,
    rows: [],
  };
  for (const machine in machineToRecipesMap) {
    const machineToAdd = {
      label: machine,
      bars: machineToRecipesMap[machine].map((currentRecipe, index) => ({
        myStart: currentRecipe.start.replace("T", " "),
        myEnd: currentRecipe.end.replace("T", " "),
        label: currentRecipe.recipe,
        ganttBarConfig: {
          color: "white",
          backgroundColor: COLORS_LIST[index],
          opacity: 0.7,
        },
      })),
    };
    ganttDataset.rows = [...ganttDataset.rows, machineToAdd];
  }
  return ganttDataset;
};
