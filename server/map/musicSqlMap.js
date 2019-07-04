/* 音乐sql语句*/

let musicSqlMap = {

  musics: {
    //获取音乐id
    id: 'select id from music where music_name = ? and singer = ?',
    //获取点击高的十首音乐，随机抽取五首展示
    click_number: 'select music_name,singer,music_img_url from music order by click_number desc limit 10',
    //获取收藏高的十首音乐，随机抽取五首展示
    collection_number: 'select music_name,singer,music_img_url from music order by collection_number desc limit 10',
    //获取新上传的五首音乐
    create_time: 'select music_name,singer,music_img_url from music order by create_time desc limit 5',
    //获取音乐信息
    music: 'select music_name,singer,music_url,lyric_url,music_img_url from music where music_name = ? and singer = ?',
    //点击数更新
    music_click_number: 'update music set click_number = (select click_number from (select music_name,singer,' +
      'click_number from music)t where t.music_name = ? and t.singer = ?) + 1 where music_name = ? and singer = ?',
    //获得所有音乐
    all: 'select a.music_name,a.singer,a.music_img_url,b.album_name from music a, album b where a.album_id = b.id limit ?,?',
    //获得对应类型的音乐
    type: 'select a.music_name,a.singer,a.music_img_url,b.album_name from music a, album b where a.type_id = (select id from type ' +
      'where type_name = ?) and a.album_id = b.id limit ?,?',
    //保存音乐
    music_post: 'insert into music(album_id,type_id,music_name,singer,music_url,lyric_url,music_img_url) values(?,?,?,?,?,?,?)',
  }
};

module.exports = musicSqlMap;
