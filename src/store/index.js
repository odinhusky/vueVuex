import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    odin: 'Husky'
  },
  mutations: {
    SETODIN (state, payload) {
      // 修改 state 的資料造成元件的更新
      state.odin = payload;
    }
  },
  actions: {
    // action 的第一個參數一定是context, 第二個是由元件dispatch進來的值，可以稱做 status 或是 payload
    commitOdin (context, status) {
      console.log('actions => context', context);
      console.log('actions => status', status);
      // action 利用 commit 通知 mutation 改變 state 的狀態
      context.commit('SETODIN', status);
    }
  },
  modules: {}
});
