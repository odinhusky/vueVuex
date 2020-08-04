<template>
  <div class="hello">
    <a class="specialBtn"
      @click.prevent="vuexit"
    >CLICK ME TO SEE VUEX CHANGE</a>

    <h1 class="mt-5">{{ showText }}</h1>

    <a class="specialBtn"
      @click.prevent="getUser"
    >GET USER LIST</a>
    <div class="container w-crtl mt-5">
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
    getUser() {
      const vm = this;
      vm.$store.dispatch('getUserList');
    }

  },
  computed: {
    showText () {
      return `Odin ${this.$store.state.odin}`
    },
    userList () {
      return this.$store.state.user;
    }
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
