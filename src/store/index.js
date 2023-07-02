import Vue from 'vue';
import Vuex from 'vuex';
import layers from './modules/layers';
import map from './modules/map';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        layers,
        map,
    },
});
