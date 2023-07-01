import Vue from 'vue';
import Vuex from 'vuex';
import layers from './modules/layers';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        layers,
    },
});
