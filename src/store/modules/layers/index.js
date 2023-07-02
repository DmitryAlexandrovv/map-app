import PinballMachinesApi from '../../../api/pinballMachines';
import SensorsApi from '../../../api/sensors';
import { toGeoJson } from '../../../utils';
import { LAYERS_TYPES } from '../../../const/layers';

const initialState = {
    pinballLocations: [],
    sensorsBoxes: [],
    loadedLayerTypes: [],
};

const mutations = {
    uploadPinballLocations(state, data) {
        state.pinballLocations = toGeoJson(
            LAYERS_TYPES.PINBALL,
            data.locations,
            item => item.name,
            item => [item.lon, item.lat],
        );
    },
    uploadSensorsBoxes(state, data) {
        state.sensorsBoxes = toGeoJson(
            LAYERS_TYPES.SENSORS,
            data,
            item => `${item.name}: ${item.sensors.length} sensors`,
            item => item.currentLocation.coordinates.slice(0, 2),
        );
    },
    loadLayer(state, type) {
        if (!state.loadedLayerTypes.includes(type)) {
            state.loadedLayerTypes.push(type);
        }
    },
    closeLayer(state, type) {
        state.loadedLayerTypes = state.loadedLayerTypes.filter(value => value !== type);

        if (type === LAYERS_TYPES.PINBALL) {
            state.pinballLocations = [];
        } else {
            state.sensorsBoxes = [];
        }
    },
};

const actions = {
    uploadPinballLocations({ commit }, type) {
        return PinballMachinesApi.getPinballMachines('Portland').then((data) => {
            if (data.errors) {
                throw new Error(data.erros);
            }

            commit('uploadPinballLocations', data);
            commit('loadLayer', type);
        });
    },
    uploadSensorsBoxes({ commit }, type) {
        return SensorsApi.getBoxes('13.424900,52.507076', 200000).then((data) => {
            if (data.errors) {
                throw new Error(data.erros);
            }

            commit('uploadSensorsBoxes', data);
            commit('loadLayer', type);
        });
    },
    loadLayer({ dispatch }, type) {
        if (type === LAYERS_TYPES.PINBALL) {
            return dispatch('uploadPinballLocations', type);
        }

        return dispatch('uploadSensorsBoxes', type);
    },
    closeLayer({ commit }, type) {
        commit('closeLayer', type);
    },
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
};
