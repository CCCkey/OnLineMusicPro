<template>
  <div class="cate_list">
    <div class="title">
      <router-link to="/" class="left">全部歌曲 &gt;</router-link>
      <div class="right">
        <router-link to="/">华语 |</router-link>
        <router-link to="/">华语 |</router-link>
        <router-link to="/">华语 |</router-link>
        <router-link to="/">华语 |</router-link>
        <router-link to="/">华语 </router-link>
      </div>
    </div>
    <div class="content">
      <div class="con_item">
        <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
        <p>不用去猜</p>
        <p>jj</p>
      </div>
      <div class="con_item">
        <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
        <p>不用去猜</p>
        <p>jj</p>
      </div>
      <div class="con_item">
        <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
        <p>不用去猜</p>
        <p>jj</p>
      </div>
      <div class="con_item">
        <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
        <p>不用去猜</p>
        <p>jj</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Category',
  data(){
    return {

    }
  }
}
</script>
<style scoped>
  .title {
    overflow: hidden;
  }

  .right {
    float: right;
    margin-top: 10px;
  }

  .content {
    overflow: hidden;
  }

  .con_item {
    float: left;
    width: 50%;
  }

  .title a {
    color: #000;
    text-decoration: none;
  }

  .left {
    float: left;
    border: 1px solid #000;
    padding: 5px 10px;
    border-radius: 14px;
    box-sizing: border-box;
  }
</style>
