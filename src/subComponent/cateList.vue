<template>
  <div class="cate_content">
  {{this.$route.params.type_name}}
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
    this.$axios.get("/musicApi/musics/type?type_name="+this.type_name+"&page="+this.page).then((res) => {
      console.log(res)
      // if(res.status == 200) {
      //   this.list = res.data.data
      // }
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
</style>
