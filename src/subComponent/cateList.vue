<template>
  <div class="cate_content">
    <div class="con_item" v-for="item in list">
      <router-link :to="'/MusicPlay?musicName='+item.music_name+'&singer='+item.singer">
        <img :src="item.music_img_url" alt="">
        <p>{{item.music_name || "暂无更多内容"}}</p>
        <p>{{item.singer || ""}}</p>
      </router-link>
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
    this.$axios.get("/musicApi/musics/type?type_name="+this.type_name+"&page="+this.page).then((res) => {
      if(res.status == 200) {
        this.list = res.data.data
      }
    });
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.$axios.get("/musicApi/musics/type?type_name="+val.params.type_name+"&page="+this.page).then((res) => {
          if(res.status == 200) {
            this.list = res.data.data
            console.log(this.list)
          }
        });
      },
      // 深度观察监听
      deep: true
    }
  },
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
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
