/* 评论SQL语句*/

let commentSqlMap = {

    comments:{
      //获取对应音乐评论
      music: 'select a.user_account,b.content,b.create_time from user a,comment b where b.music_id = (select id from music where music_name = ? and singer = ?) limit ?,?',
      //保存评论到数据库
      comment: 'insert into comment(id,user_id,music_id,content,create_time) values(?,?,?,?,?)',
    }
};
module.exports = commentSqlMap;
