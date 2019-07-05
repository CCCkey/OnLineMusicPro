<template>
  <div id="app">
    <header class="bar bar-nav">
      <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
      <a href="" class="logo"><img src="./assets/img/logo/logo.png" alt=""></a>
      <a href="" class="brand"><img src="./assets/img/logo/brand.png" alt=""></a>
      <a href="" class="search"><img src="./assets/img/64x64/seach.png" alt=""></a>
    </header>
    <router-view/>
    <nav class="bar bar-tab">
      <router-link class="tab-item" to="/">
        <span class="icon icon-home"><img src="./assets/img/64x64/bottom/home.png" alt=""></span>
        <p class="tab-label">首页</p>
      </router-link>
      <router-link class="tab-item" to="/category">
        <span class="icon icon-email"><img src="./assets/img/64x64/bottom/music.png" alt=""></span>
        <p class="tab-label">发现</p>
      </router-link>
      <router-link class="tab-item" to="/">
        <span class="icon icon-contact"><img src="./assets/img/64x64/bottom/album.png" alt=""></span>
        <p class="tab-label">专辑</p>
      </router-link>
      <router-link class="tab-item" to="/">
        <span class="icon icon-gear"><img src="./assets/img/64x64/bottom/rank.png" alt=""></span>
        <p class="tab-label">排行</p>
      </router-link>
      <router-link class="tab-item" to="/" @click="">
        <span class="icon icon-gear"><img src="./assets/img/64x64/bottom/user.png" alt=""></span>
        <p class="tab-label">我的</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:true
    }
  },
  methods:{
    toggleSrc(){

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin-top: 50px;
  margin-bottom: 50px;

  box-sizing: border-box;
}
*{margin: 0;padding: 0;}
a{
  text-decoration: none;
  cursor: pointer;
}
a:focus, a:hover {
  text-decoration: none;
}
/* #body {
    width: 100%;
    height: 100%;
    position: relative;
} */
.bar-tab .tab-item.active {
  color: #d4237a;
}

.logo {
  flex: 1
}
.logo img {
  width: 60%;

}
.brand {
  flex: 2;
  position: relative;
}
.brand img {
  width: 50%;
  position: absolute;
  left:-30px;
  top: 10px
}
.search {
  flex: 1;
  position: relative;

}
.search img {
  width: 30%;
  position: absolute;
  right: 30px;
  top: 10px
}
.bar-nav {
  -webkit-box-shadow: none;
  box-shadow: none;
  height: 40px;
  position: fixed;
  top: 0;
  width: 100%;
}
.bar {
  background-color: #fff;
  display: flex;
}
.search {

}
.bar-tab {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.tab-item {
  width: 20%;
  text-align: center;
  font-size: 14px;
}
  .icon img{
    width: 30%;
  }
</style>
