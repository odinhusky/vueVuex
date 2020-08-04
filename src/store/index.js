import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    odin: 'Husky',
    user: []
  },
  mutations: {
    SETODIN (state, payload) {
      // 修改 state 的資料造成元件的更新
      state.odin = payload;
    },
    // 將資料寫入state
    SETUSERLIST (state, payload) {
      state.user = [...payload];
    }
  },
  actions: {
    // action 的第一個參數一定是context, 第二個是由元件dispatch進來的值，可以稱做 status 或是 payload
    commitOdin (context, status) {
      console.log('actions => context', context);
      console.log('actions => status', status);
      // action 利用 commit 通知 mutation 改變 state 的狀態
      context.commit('SETODIN', status);
    },
    // 非同步行為取得使用者資料，只要 import axios爾以
    getUserList(context){
      const url = 'https://randomuser.me/api/';
      axios.get(url)
        .then((res) => {
          console.log('user', res);
          context.commit('SETUSERLIST', res.data.results);
        });
    }
  },
  modules: {}
});
