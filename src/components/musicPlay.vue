<template>
  <div class="play">
    <div class="top">
      {{musicName}}
      <span class="back" @click="goback"><img src="../assets/img/back-white.png" alt=""></span>
    </div>
    <div class="lyric" id="lyric">
      <p v-for = "data in lyric">{{ data }}</p>
    </div>
    <audio id="audio" @canplay="watchMusicTime" :src="music_url" controls="controls"></audio>
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
  let that;
  let temp = 0;
  export default{
    data (){
      return {
        comment_list :null,
        content:'',
        musicName:this.$route.query.musicName,
        singer:this.$route.query.singer,
        page:1,
        lyric:[],
        time:[],
        music_url: null
      }
    },
    methods:{
      watchMusicTime(){
        let musicDom = document.getElementsByTagName('audio')[0];//获取Audio的DOM节点
        //使用事件监听方式捕捉事件
        musicDom.addEventListener("timeupdate",function(){//监听音频播放的实时时间事件
          let timeDisplay;
          //用秒数来显示当前播放进度
          timeDisplay = Math.floor(musicDom.currentTime);//获取实时时间
          let length = that.time.length;
          for(let i = 0; i < length; i++){
            if(that.time[i] <= timeDisplay && that.time[i + 1] > timeDisplay && temp !=i){
              let dom = document.getElementsByTagName("p");
              for(let j = 0; j < length; j++){
                dom[j].style.color = "black";
              }
              dom[i].style.color = "blue";
              temp = i;
              let box = document.getElementById("lyric");
              if (i > 8) {
                box.scrollTop = dom[i].offsetTop - dom[8].offsetTop;
              }else {
                box.scrollTop = 0;
              }
            }else if(that.time[length - 1] <= timeDisplay){
              document.getElementsByTagName("p")[length - 1].style.color = "blue";
              document.getElementsByTagName("p")[length - 2].style.color = "black";
            }
          }
        },false);
      },
      // 发表评论
      commit(){
        if(this.content.replace(/^\s*|\s*$/g,"") == "") {
          console.log("请输入内容")
          return false;
        }
        this.$axios.post("/commentApi/comments/comment?content="+this.content+"&music_name="+this.musicName+"&singer="+this.singer).then((res) => {
          console.log(res)
          if(res.status == 200) {
            this.comment_list.push({ user_account : "匿名",content: this.content});
            this.content = ""
          }
        })
      },
      goback(){
        this.$router.go(-1)
      }
    },
    created() {
      that = this;
      //获取评论列表
      this.$axios.get("/commentApi/comments/music?music_name="+this.musicName+"&singer="+this.singer+"&page="+this.page).then((res) => {
        console.log(res)
        if(res.status == 200) {
          this.comment_list = res.data.data
        }
      });
      this.$axios.get("/musicApi/musics/music?music_name="+this.musicName+"&singer="+this.singer).then((res) => {
        if(res.status == 200) {
          this.music_url = res.data.data[0].music_url;
          //歌词和时间数组初始化
          this.$axios.get("../" + res.data.data[0].lyric_url).then((res) => {
            let i = 0;
            res.data.lyric.split('\n').forEach(v=>{
              this.lyric.push(v.split(']')[1]);
              this.time.push(~~v.split(']')[0].split('[')[1].split('.')[0].split(":")[0] * 60 + ~~v.split(']')[0].split('[')[1].split('.')[0].split(":")[1]);
              i++;
            });
          });
        }
      });
      // 获取点赞数
      this.$axios.put("/musicApi/musics/music/click_number?music_name="+this.musicName+"&singer="+this.singer).then((res) => {
        console.log(res)
      })
    }
  }
</script>
<style scoped>
  .back{
    position: absolute;
    top: 3px;
    left: 5%;
    width: 25px;
  }
  .back img{
    width: 80%;
  }
  li{
    list-style: none;
  }
  .play {
    color: #110a1c;
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 11;
  }
  .top {
    position: fixed;
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
  padding-top: 30px;
  text-align: center;
  height: 500px;
  width: 100%;
  font-size: 14px;
  padding-bottom: 10px;
  overflow-y: scroll;
  background-color: #fff;

}
.lyric::-webkit-scrollbar {
  display: none;
}
.lyric p{
  margin-bottom: 8px;
  height: 20px;
}
  #audio {
    /*background: linear-gradient(to right, #d098ff , #8cf6fb);*/
    height: 35px;
    width: 100%;
    padding: 10px 0;
    outline: none;
    /*box-sizing: border-box;*/
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
    margin-bottom: 50px;
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
