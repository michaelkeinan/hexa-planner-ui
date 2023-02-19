import inventoryData from "../rawData/inventory.json";

const state = {
  samplesTimestampsList: [],
  materialValuesByName: {},
};

const getters = {};

const mutations = {};

const actions = {
  fetchAndParseInventoryData: () => {
    state.samplesTimestampsList = Object.keys(inventoryData);
    state.materialValuesByName = Object.values(inventoryData).reduce(
      (materialsMap, currentSample) => {
        for (const materialName in currentSample) {
          const materialValue = currentSample[materialName];
          materialsMap[materialName] = materialsMap[materialName]
            ? [...materialsMap[materialName], materialValue]
            : [materialValue];
        }
        return materialsMap;
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
