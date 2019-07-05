/* 评论业务逻辑*/
let models = require('../db');
let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let $sql = require('../map/commentSqlMap');
let $sql_m = require('../map/musicSqlMap');

// 连接数据库
let conn = mysql.createConnection(models.mysql);

//返回信息
conn.connect();
let jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '500',
      flag: 'false',
      message: '操作失败',
    });
  } else {
    res.json({
      code: '200',
      flag: 'true',
      message: '操作成功',
      data: ret,
    });
  }
};

//获取对应音乐评论
router.get('/comments/music', (req,res) => {
  let sql=$sql.comments.music;
  conn.query(sql, [req.query.music_name, req.query.singer, (req.query.page - 1) * 8, (req.query.page) * 8],
      function(err,result) {
        if (err) {
          console.log(err);
        }
        jsonWrite(res, result);
      })
});

//保存评论到数据库
router.post('/comments/comment', (req,res) => {
  let sql=$sql.comments.comment;
  let sql_m = $sql_m.musics.id;
  conn.query(sql_m, [req.query.music_name, req.query.singer], function (err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      conn.query(sql, [null, 1, result[0].id, req.query.content, null], function(err,result) {
        if (err) {
          console.log(err);
        }
        jsonWrite(res, result);
      })
    }
  });
});

module.exports = router;
