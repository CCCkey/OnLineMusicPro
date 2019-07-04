<template>
  <div class="cate_content">
    <div class="con_item" v-for="item in all_list">
      <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
      <p>{{item.music_name}}</p>
      <p>{{item.singer}}</p>
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
</template>
<script>
  export default {
    data(){
      return {
        all_list:null,
        page:1
      }
    },
    created(){
      this.$axios.get("/musicApi/musics/all?page="+this.page).then((res) => {
        // console.log(res)
        if(res.status == 200) {
          this.all_list = res.data.data
        }
      });
    }
  }
</script>
<style scoped>
  .cate_content {
    overflow: hidden;
    margin-top: 20px;
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
    padding: 0 10px;
    height: 20px;
    overflow: hidden;
    font-size: 14px;
  }
</style>
