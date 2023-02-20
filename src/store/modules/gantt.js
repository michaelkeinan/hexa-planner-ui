import ganttData from "../rawData/gantt.json";

const state = {
  machineToRecipesMap: {},
};

const getters = {};

const mutations = {};

const actions = {
  fetchAndParseGanttData: () => {
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
