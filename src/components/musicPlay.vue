<template>
  <div class="play">
    <div class="top">
      {{this.music_info.music_name}}
    </div>
    <div class="lyric">
      <p>她静悄悄地来过</p>
      <p>她慢慢带走沉默</p>
      <p>只是最后的承诺</p>
      <p>还是没有带走了寂寞</p>
      <p>我们爱的没有错</p>
      <p>只是美丽的独秀太折磨</p>
      <p>她说无所谓</p>
      <p>只要能在夜里 翻来覆去的 时候有寄托</p>
      <p>等不到天黑 烟火不会太完美</p>
      <p>回忆烧成灰 还是等不到结尾</p>
      <p>她曾说的无所谓 我怕一天一天被摧毁</p>
      <p>等不到天黑 不敢凋谢的花蕾</p>
      <p>绿叶在跟随 放开刺痛的滋味</p>
      <p>今后不再怕天明 我想只是害怕清醒</p>
      <p>他静悄悄地来过</p>
      <p>他慢慢带走沉默</p>
<!--      {{this.music_info.lyric_url}}-->
    </div>
    <audio id="audio" src="../assets/01.mp3" controls="controls" type=""></audio>
    <div class="comment">
      <div class="form">
        <input type="text" v-model="content" placeholder="发表评论">
        <span><img src="../assets/img/64x64/Smile.png" alt=""></span>
        <button @click="commit">确定</button>
      </div>
      <div class="comment_list">
        <ul>
          <li v-for="item in comment_list">
            <span></span>{{item.user_account}}:{{item.content}}
            <img src="../assets/img/64x64/信息-2.png" alt="">
            <img src="../assets/img/64x64/点赞.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data (){
      return {
        comment_list :null,
        music_info :null,
        content:'',
        musicName:this.$route.query.musicName,
        singer:this.$route.query.singer,
        page:1
      }
    },
    methods:{
      // 添加评论
      commit(){
        if(this.content.replace(/^\s*|\s*$/g,"") == "") {
          console.log("请输入内容")
          return false;
        }
        // this.$axios.post("/commentApi/comments/comment",{"content":this.content,"music_name":this.musicName,"singer":this.singer}).then((res) => {
          // console.log(res)
          // if(res.status == 200) {
          //   this.commnet_list.push({user_account : "匿名",conntent: this.content})
          // }
        // })
      }
    },
    created() {
      //获取评论列表
      this.$axios.get("/commentApi/comments/music?music_name="+this.musicName+"&singer="+this.singer+"&page="+this.page).then((res) => {
        console.log(res)
        if(res.status == 200) {
          this.comment_list = res.data.data
        }
      });
      // 获取歌曲信息
      this.$axios.get("/musicApi/musics/music?music_name="+this.musicName+"&singer="+this.singer).then((res) => {
        console.log(res)
        if(res.status == 200) {
          this.music_info = res.data.data[0]
        }
      })
    }
  }
</script>
<style scoped>
  li{
    list-style: none;
  }
  .play {

  }
  .top {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 20px;
    background-color: #d4237a;
    height: 30px;
    line-height: 30px;
    color: white;
  }
.lyric {
  box-sizing: border-box;
  padding: 0 15px;
  padding-top: 10px;
  text-align: center;
  height: 70%;
  width: 100%;
  font-size: 14px;
  padding-bottom: 10px;
}
.lyric p{
  margin-bottom: 8px;
}
  #audio {
    /*background: linear-gradient(to right, #d098ff , #8cf6fb);*/
    height: 35px;
  }
  .form {
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
    position: relative;
  }
.form input {
  width: 77%;
  outline: none;
  height: 25px;
  background-color: #ccc;
  border: none;
  padding-left: 5px;
  box-sizing: border-box;
}
  .form img{
    width: 6%;
    position: absolute;
    top: 2%;
    right: 16%;
  }
  .form button {
    width: 40px;
    height: 25px;
    outline: none;
    background-color: #ccc;
    border: none;
    float: right;
  }
  .comment_list {
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
    padding-top: 15px;
  }
  .comment_list span {
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d4237a;
    margin-top: 3.5%;
    margin-right: 2%;
  }
  .comment_list li {
    height: 30px;
    line-height: 30px;
  }
  .comment_list img{
    width: 7%;
    float: right;
    margin-right: 2%;
  }

</style>
