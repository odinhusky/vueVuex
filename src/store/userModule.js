
import axios from 'axios';

export default {
// 如果沒加 namespaced: true => namespaced: false
// state => 模組區域變數
// actions, getter, muatations 都是全域變數

// 如!果!有!加! namespaced: true
// state => 還是模組區域變數
// actions, getter, muatations 都是模組區域變數
    namespaced: true,

    state: {
        user: []
    },
    // 故意拿掉創造可以呼叫 global的 mutation
    mutations: {
        // 將資料寫入state
        SETUSERLIST (state, payload) {
            state.user = [...payload];
        }
    },
    actions: {
        // 非同步行為取得使用者資料，只要 import axios爾以
        getUserList(context){
        const url = 'https://randomuser.me/api/';
        axios.get(url)
            .then((res) => {
            console.log('user', res);
            // 在模組內需要呼叫全域的mutation的時候，加入{root: true}作為第三個參數告知
            context.commit('SETUSERLIST', res.data.results);
            });
        },
    },
    getters: {
        userList (state) {
        return state.user;
        }
    },
};
