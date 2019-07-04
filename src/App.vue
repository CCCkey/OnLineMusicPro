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
      <router-link class="tab-item active" to="/">
        <span class="icon icon-home"></span>
        <span class="tab-label">首页</span>
      </router-link>
      <router-link class="tab-item" to="/categoty">
        <span class="icon icon-email"></span>
        <span class="tab-label">发现</span>
      </router-link>
      <router-link class="tab-item" to="/">
        <span class="icon icon-contact"></span>
        <span class="tab-label">专辑</span>
      </router-link>
      <router-link class="tab-item" to="/">
        <span class="icon icon-gear"></span>
        <span class="tab-label">排行</span>
      </router-link>
      <router-link class="tab-item" to="/">
        <span class="icon icon-gear"></span>
        <span class="tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  position: absolute;
  top: 40px;
  bottom: 50px;
  left: 10px;
  right: 10px;
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
  flex: 2
}
.brand img {
  width: 60%;
}
.search {
  flex: 1;
  /* position: absolute;
  right: 20px;
  top: 20px */
}
.search img {
  width: 30%;
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
</style>
