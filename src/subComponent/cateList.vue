<template>
  <div class="cate_content">
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
</template>
<script>
export default {
  data(){
    return {
      type_name:this.$route.params.type_name,
      list:null
    }
  },
  created(){
    // this.$axios.get("/typeApi/musics/type"+this.type_name).then((res) => {
    //   console.log(res)
    //   // if(res.status == 200) {
    //   //   this.list = res.data.data
    //   // }
    // });
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
</style>
