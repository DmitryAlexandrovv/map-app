import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Vue from 'vue';

library.add(faSquareCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);
