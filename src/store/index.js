import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'; // 會用到的地方已經搬移到 userModule

import userModule from './userModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    odin: 'Husky',
    // 已經搬移到 userModule
    // user: []
  },
  mutations: {
    SETODIN (state, payload) {
      // 修改 state 的資料造成元件的更新
      state.odin = payload;
    },
    // 將資料寫入state
    // SETUSERLIST (state, payload) {
    //   state.user = [...payload];
    // }
  },
  actions: {
    // action 的第一個參數一定是context, 第二個是由元件dispatch進來的值，可以稱做 status 或是 payload
    commitOdin (context, status) {
      console.log('actions => context', context);
      console.log('actions => status', status);
      // action 利用 commit 通知 mutation 改變 state 的狀態
      context.commit('SETODIN', status);
    },
    // 已經搬移到 userModule
    // 非同步行為取得使用者資料，只要 import axios爾以
    // getUserList(context){
    //   const url = 'https://randomuser.me/api/';
    //   axios.get(url)
    //     .then((res) => {
    //       console.log('user', res);
    //       context.commit('SETUSERLIST', res.data.results);
    //     });
    // },
    // 傳遞進來的 status 或是 payload有多個的時候，可以透過物件的包裝以及解構來傳遞
    passParamByObject(context, {id, gg}){
      console.log(context, id, gg);
    }
  },
  getters: {
    showText (state) {
      return `Odin ${state.odin}`;
    },
    // 已經搬移到 userModule
    // userList (state) {
    //   return state.user;
    // }
  },
  modules: {
    userModule
  }
});
