<template>
  <div class="hello">
    <a class="specialBtn"
      @click.prevent="vuexit"
    >CLICK ME TO SEE VUEX CHANGE</a>

    <h1 class="mt-5">{{ showText }}</h1>

    <a class="specialBtn"
      @click.prevent="getUserList"
    >GET USER LIST</a>

    <div class="container w-crtl mt-5" v-if="userList.length > 0">
      <div class="card-deck">
        <div class="card" v-for="item in userList" :key="item.id.value">
          <img :src="item.picture.large" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ `${item.name.first} ${item.name.last} (${item.gender})` }}</h5>
            <p class="card-text">{{ item.email }}</p>
            <p class="card-text"><small class="text-muted">{{ item.phone }}</small></p>
          </div>
        </div>
      </div>
    </div>

    <div class="space"></div>

  </div>
</template>

<script>
// import Getters 以及 Actions
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function () {
    return {
      count: 1
    }
  },
  methods: {
    // 只做同步的行為，非同步的行為在actions中的function內完成
    // 非同步行為會讓state跟mutation的資料不一致
    vuexit () {
      const vm = this;
      vm.count++;
      console.log(vm.count, vm.count % 2);
      vm.count % 2 === 0 ?
        vm.$store.dispatch('commitOdin', 'Chen') :
        vm.$store.dispatch('commitOdin', 'Husky') ;
    },
    // 取得遠端資料
    // getUser() {
    //   const vm = this;
    //   vm.$store.dispatch('getUserList');
    // }
    // 利用 mapActions 取代 methods
    // 模組化以後則在前方加入模組的名稱
    ...mapActions('userModule', ['getUserList'])

  },
  computed: {
    // 利用 mapGetters 取代 compute
    // showText () {
    //   return `Odin ${this.$store.state.odin}`
    // },
    // userList () {
    //   return this.$store.state.user;
    // }
    // 利用解構的方式取出特定的 Getter 作為 computed 使用
    // 模組化以後則在前方加入模組的名稱

    ...mapGetters('userModule', ['userList']),
    ...mapGetters(['showText'])

  },
  watch: {
    count (count) {
      const vm = this;
      if (count > 50) {
        if(count % 2 === 0) {
          vm.count = 2;
        } else {
          vm.count = 1;
        }
      }
    }
  },
  // lifecycle hook
  created() {
    const id = '1069';
    const gg = '18/5';
    console.log('hooks => created');
    // vuex action to demo passing payload params by object form
    this.$store.dispatch('passParamByObject', {id, gg});
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$color: aqua;
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.specialBtn {
  font-size: 36px;
  background-color: #ffffff;
  border: 1px solid $color;
  // width: 100px;
  // height: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #000000;
  padding: 5px;
  cursor: pointer;
  margin-top: 16px;
  display: inline-flex;
}
.space{
  display: block;
  margin-top: 30px;
  width: 100vw;
  height: 30vh;
}

.w-crtl{
  width: 15%;
}
</style>
