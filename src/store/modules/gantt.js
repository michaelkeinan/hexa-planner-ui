import ganttData from "../rawData/gantt.json";

const state = {
  machineToRecipesMap: {},
  recipesTimeAndDatePeriod: {},
};

const getters = {};

const mutations = {};

const actions = {
  fetchAndParseGanttData: () => {
    const startTimeAndDate = ganttData[0].start.replace("T", " ");
    const endTimeAndDate = ganttData[ganttData.length - 1].end.replace(
      "T",
      " "
    );
    state.recipesTimeAndDatePeriod = {
      startTimeAndDate,
      endTimeAndDate,
    };

    state.machineToRecipesMap = ganttData.reduce(
      (recipesMap, currentRecipe) => {
        recipesMap[currentRecipe.machine] = recipesMap[currentRecipe.machine]
          ? [...recipesMap[currentRecipe.machine], currentRecipe]
          : [currentRecipe];
        return recipesMap;
      },
      {}
    );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
