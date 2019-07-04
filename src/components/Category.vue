<template>
  <div>
    <div class="cate_title">
      <router-link to="/category/" class="left">全部歌曲 &gt;</router-link>
      <div class="right">
        <li v-for="item in type_list">
          <router-link :to="'/category/type/'+item.type_name" > {{item.type_name}} </router-link>
        </li>

      </div>
    </div>
    <router-view/>

  </div>
</template>
<script>
  export default {
  data (){
    return {
        type_list:null
    }
  },
  created(){
    this.$axios.get("/typeApi/types/all").then((res) => {
      if(res.status == 200) {
        this.type_list = res.data.data
      }
    });
  }
  }
</script>
<style>
  html,body,p,ul,li,img,a,div,form,input{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  .cate_title {
    overflow: hidden;
    margin-top: 20px;
    margin-left: 20px;
  }

  .right {
    float: right;
    margin-top: 5px;
    margin-right: 10px;
    overflow: hidden;
  }
  .right li{
    float: left;
    list-style: none;
    margin-right: 5px;
  }

  .cate_title a {
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
