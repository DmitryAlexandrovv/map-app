const initialState = {
    map: null,
};

const mutations = {
    setMap(state, map) {
        state.map = map;
    },
    flyToCoordinates(state, coordinates) {
        state.map.flyTo({
            center: coordinates,
            zoom: 9,
            bearing: 0,
            speed: 2,
            curve: 1,
            essential: true,
        });
    },
};

const actions = {
    setMap({ commit }, map) {
        commit('setMap', map);
    },
    flyToCoordinates({ commit }, coordinates) {
        commit('flyToCoordinates', coordinates);
    },
};

export default {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
};
