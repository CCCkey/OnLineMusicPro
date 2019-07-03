<template>
  <div class="hello">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/img/loop/wallhaven-3959yy.jpg" alt=""></div>
<!--        <div class="swiper-slide"><img src="../assets/img/loop/wallhaven-oxyl99.jpg" alt=""></div>-->
<!--        <div class="swiper-slide"><img src="../assets/img/loop/wallhaven-w8wl27.jpg" alt=""></div>-->
      </div>
      <!-- 如果需要分页器 -->
<!--      <div class="swiper-pagination"></div>-->

    </div>
    <div class="new_song">
      <div class="new_song_title">
        <h4>新歌推送</h4>
        <p>更多 &gt; </p>
      </div>
      <div class="new_song_body">
        <div class="new_song_item">
          <img src="../assets/img/90x90/T002R90x90M000000YFOEc3weOYN.jpg" alt="">
          <p class="title">写给一首歌的歌</p>
          <p>白举纲</p>
        </div>
        <div class="new_song_item">
          <img src="../assets/img/90x90/T002R90x90M000001LC99w1g9eVG.jpg" alt="">
          <p class="title">Higher Love</p>
          <p>Kygo / Whitney Houston</p>
        </div>
        <div class="new_song_item">
          <img src="../assets/img/90x90/T002R90x90M000002qENNf06CQBk.jpg" alt="">
          <p class="title">写给一首歌的歌</p>
          <p>白举纲</p>
        </div>
        <div class="new_song_item">
          <img src="../assets/img/90x90/T002R90x90M000002qENNf06CQBk.jpg" alt="">
          <p class="title">写给一首歌的歌</p>
          <p>白举纲</p>
        </div>
        <div class="new_song_item">
          <img src="../assets/img/90x90/T002R90x90M000002qENNf06CQBk.jpg" alt="">
          <p class="title">写给一首歌的歌</p>
          <p>白举纲</p>
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
          <img src="../assets/img/300x300/max.png" alt="" width="90px">
          <ul>
            <li>
                               <span>1</span>
                               写给一首歌的歌-白举纲</li>
                           <li></li>
                            <li></li>
          </ul>
        </div>
        <div class="hot_item">
          <img src="../assets/img/300x300/top.png" alt="" width="90px">
          <ul class="list">
            <li>
                <span>1</span>
                写给一首歌的歌-白举纲
            </li>
            <li>
                <span>1</span>
                写给一首歌的歌-白举纲
            </li>
            <li>
                <span>1</span>
                写给一首歌的歌-白举纲
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
      msg: ''
    }
  },
  created(){
  // this.$axios.get("").then(() => )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin: 0px;padding: 0px;}
  li{
    list-style: none;
  }
  .swiper-container {
    /*background: url(../img/loop/mask.png) no-repeat;*/
    width: 100%;
    height: 211px;
  }
  .swiper-container img{
    width: 100%;
    height: 211px;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
  .new_song,.hot {
    margin-top: 15px;
  }
  .new_song_body {
    width: 100%;
    /*display: flex;*/
    overflow: hidden;
  }
  .new_song_item {
    float: left;
    text-align: center;
    /*width: 33.3%;*/
    width: 107px;
    overflow: hidden;
    padding: 0 5px;
  }
  .new_song_item img{
    width: 100%;
  }
  .new_song_item p{
    overflow: hidden;
    text-align: left;
    margin: 0;
    padding: 0;
    height: 20px;
    font-size: 14px;
  }
  .new_song_item .title  {
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
  .hot_item ul{
    float: right;
    margin-right: 60px;
  }
  .hot_item ul>li {
    height: 32px;
    line-height: 32px;
  }
</style>
