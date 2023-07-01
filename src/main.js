import 'normalize.css';
import Vue from 'vue';
import App from './App';
import './config/font-awesome';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
