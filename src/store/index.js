import Vue from 'vue';
import Vuex from 'vuex';
import statements from './modules/statements';
import statement_types from './modules/statement_types';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    statements,
    statement_types,
  },
});
