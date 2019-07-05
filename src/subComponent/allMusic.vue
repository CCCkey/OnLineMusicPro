<template>
  <div class="cate_content">
    <div class="con_item" v-for="item in all_list">
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
        all_list:null,
        page:1
      }
    },
    created(){
      this.$axios.get("/musicApi/musics/all?page="+this.page).then((res) => {
        console.log(res)
        if(res.status == 200) {
          this.all_list = res.data.data
        }
      });
    }
  }
</script>
<style scoped>
  a{
    color: black;
  }
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
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
