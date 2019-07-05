<template>
  <div class="hello">
    <div id="frame">
      <div id="photos" class="play">
        <img src="../assets/img/loop/wallhaven-3959yy.jpg">
        <img src="../assets/img/loop/wallhaven-oxyl99.jpg">
        <img src="../assets/img/loop/wallhaven-w8wl27.jpg">
        <img src="../assets/img/loop/wallhaven-oxyl99.jpg">
      </div>
    </div>

    <div class="new_song">
      <div class="new_song_title">
        <h4>新歌推送</h4>
        <p>更多 &gt; </p>
      </div>
      <div class="new_song_body">
        <div class="new_song_item"  v-for="item in new_list">
          <router-link :to="'/MusicPlay?musicName='+item.music_name+'&singer='+item.singer">
            <img :src="item.music_img_url" alt="">
            <p class="title">{{item.music_name}}</p>
            <p>{{item.singer}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hot">
      <div class="hot_title">
        <h4>热门推荐</h4>
        <p>更多 &gt; </p>
      </div>
      <div class="hot_body">
        <div class="hot_item">
          <img src="../assets/img/300x300/max.png" alt="">
          <ul class="list">
            <li v-for="(item,index) in max_list">
              <router-link :to="'/MusicPlay?musicName='+item.music_name+'&singer='+item.singer">
               <span>{{index + 1}}</span>
               {{item.music_name}}-{{item.singer}}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="hot_item">
          <img src="../assets/img/300x300/top.png" alt="">
          <ul class="list">
            <li v-for="(item,index) in top_list">
              <router-link :to="'/MusicPlay?musicName='+item.music_name+'&singer='+item.singer">
                <span>{{index + 1}}</span>
              {{item.music_name}}-{{item.singer}}
              </router-link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      new_list: null,
      max_list:null,
      top_list:null
    }
  },
  created(){
    this.$axios.get("/musicApi/musics/create_time").then((res) => {
      if(res.data.code == 200) {
        this.new_list = res.data.data
        this.new_list.splice(0,2)
      }
    });
    this.$axios.get("/musicApi/musics/collection_number").then((res) => {
      if(res.data.code == 200) {
        this.max_list = res.data.data
      }
    });
    this.$axios.get("/musicApi/musics/click_number").then((res) => {
      if(res.data.code == 200) {
        this.top_list = res.data.data
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.myactive {*/
  /*  color: #d4237a;*/
  /*}*/
  *{margin: 0;padding: 0;}
  li{
    list-style: none;
  }

  .hello {
    padding:0 10px;
  }
  .new_song,.hot {
    margin-top: 15px;
  }
  .new_song_body {
    width: 100%;
    /*display: flex;*/
    overflow: hidden;
  }
  .new_song_body a {
    color: black;
  }
  .new_song_item {
    float: left;
    text-align: center;
    width: 33.3%;
    overflow: hidden;
  }
  .new_song_item img{
    width: 90%;
    border-radius: 10px;
  }
  .new_song_item p{
    overflow: hidden;
    text-align: left;
    margin-left: 10px;
    padding: 0;
    height: 20px;
    font-size: 14px;
  }
.title  {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }
  .new_song_title, .hot_title {
    overflow: hidden;
    margin-bottom: 10px;
  }
  .new_song_title h4, .hot_title h4 {
    float: left;
    margin: 0;
    padding: 0;
  }
  .new_song_title p, .hot_title p {
    float: right;
    font-size: 14px;
  }
  .hot_item {
    margin-bottom: 20px;
    position: relative;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .hot_item img{
    width: 90px;
  }
  .hot_item ul{
    float: right;
    margin-right: 15%;
    width: 50%;
    height: 100px;
    overflow: hidden;
  }
  .hot_item a{
    color: #000;
  }
  .hot_item ul>li {
    width: 100%;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }


  #frame {
    position:relative;
    width:100%;
    height:200px;
    overflow:hidden;
    border-radius:10px
  }

  #photos img {
    float:left;
    width:25%;
    /*height: 200px;*/
  }
  #photos {
    position:absolute;
    z-index:9;
    width:calc(100% * 4);
    /*---修改图片数量的话需要修改下面的动画参数*/
  }
  .play {
    animation:ma 20s ease-out infinite alternate;
  }
  @keyframes ma {
    0%,25% {
      margin-left:0;
    }
    30%,50% {
      margin-left:-100%;
    }
    55%,75% {
      margin-left:-200%;
    }
    80%,100% {
      margin-left:-300%;
    }
  }
</style>
