import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const state = {
  count: 0
};
const getters = {
  count: state => state.count,
};
const mutations = {
  increment (state) {
    state.count++;
    console.log(store.state.count)
  }
};
const actions = {
};

const debug = process.env.NODE_ENV !== 'production'

const store= new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
export default store
