<template>
  <div class="cate_content">
    <div class="con_item" v-for="item in list">
      <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
      <p>{{item.music_name}}</p>
      <p>{{item.singer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      type_name:this.$route.params.type_name,
      page:1,
      list:null
    }
  },
  created(){
    console.log(this.type_name)
    this.$axios.get("/musicApi/musics/type?type_name="+this.type_name+"&page="+this.page).then((res) => {
      // console.log(res)
      if(res.status == 200) {
        this.list = res.data.data
      }
    });
  }
}
</script>
<style scoped>
  .cate_content {
    overflow: hidden;
    margin-top: 30px;
    text-align: center;
  }

  .con_item {
    float: left;
    width: 50%;
    padding: 10px 0;
  }
  .con_item img{
    width: 120px;
    border-radius: 20px;
  }
  .con_item p{
    overflow: hidden;
    height: 20px;
    font-size: 14px;
  }
</style>
