import VuexPersistence from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import layers from './modules/layers';
import map from './modules/map';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['layers'],
});


export default new Vuex.Store({
    modules: {
        layers,
        map,
    },
    plugins: [vuexLocal.plugin],
});
