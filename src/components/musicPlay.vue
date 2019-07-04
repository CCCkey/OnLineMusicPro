<template>
  <div class="play">
    <div class="top">

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
    </div>
    <audio id="audio" src="../assets/01.mp3" controls="controls"></audio>
    <div class="comment">
      <div class="form">
        <input type="text">
        <span><img src="" alt=""></span>
        <button>确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

}
</script>
<style scoped>
.lyric {
  padding-top: 30px;
  text-align: center;
}
.lyric p{
  margin-bottom: 8px;
}
  #audio {
    /*background: linear-gradient(to right, #d098ff , #8cf6fb);*/
    height: 35px;
  }
</style>
