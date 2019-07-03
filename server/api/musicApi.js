/* 音乐业务逻辑*/
let models = require('../db');
let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let $sql = require('../map/musicSqlMap');
let $sql_t = require('../map/typeSqlMap');
let $sql_a = require('../map/albumSqlMap');
let fs = require('fs');

// 连接数据库
let conn = mysql.createConnection(models.mysql);
conn.connect();

//返回信息
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
      data:ret,
    });
  }
};

//获取音乐id
router.get('/musics/id', (req,res) => {
  let sql=$sql.musics.id;
  conn.query(sql, [req.query.music_name, req.query.singer], function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获取点击高的十首音乐，随机抽取五首展示
router.get('/musics/click_number', (req,res) => {
  let sql=$sql.musics.click_number;
  conn.query(sql, function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获取收藏高的十首音乐，随机抽取五首展示
router.get('/musics/collection_number', (req,res) => {
  let sql=$sql.musics.collection_number;
  conn.query(sql, function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获取新上传的五首音乐
router.get('/musics/create_time', (req,res) => {
  let sql=$sql.musics.create_time;
  conn.query(sql, function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获取音乐信息
router.get('/musics/music', (req,res) => {
  let sql=$sql.musics.music;
  conn.query(sql, [req.query.music_name, req.query.singer], function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//点击数更新
router.put('/musics/music/click_number', (req,res) => {
  let sql=$sql.musics.music_click_number;
  conn.query(sql, [req.query.music_name, req.query.singer, req.query.music_name, req.query.singer], function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获得所有音乐
router.get('/musics/all', (req,res) => {
  let sql=$sql.musics.all;
  conn.query(sql, [(req.query.page - 1) * 8, req.query.page * 8], function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//获得对应类型的音乐
router.get('/musics/type', (req,res) => {
  let sql=$sql.musics.type;
  conn.query(sql, [req.query.type_name, (req.query.page - 1) * 8, req.query.page * 8], function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

//保存音乐
router.post('/musics/music', (req,res) => {
  let sql=$sql.musics.music_post;
  let sql_t=$sql_t.types.id;
  let sql_a=$sql_a.albums.id;
  let type_id;
  let album_id;
  conn.query(sql_t, req.query.type_name, function(err,result) {
    if (err) {
      console.log(err);
    }
    type_id = result[0].id;
    conn.query(sql_a, req.query.album_name,function(err,result) {
      if (err) {
        console.log(err);
      }
      album_id = result[0].id;
      saveFile(req.query.music_name, req.query.music_data, req.query.lyric_data, req.query.music_img_data);
      conn.query(sql, [album_id, type_id, req.query.music_name, req.query.singer,
        'static/mp3/' + req.query.music_name + '.mp3', 'static/lyric/' + req.query.music_name + '.txt',
        'static/image/' + req.query.music_name + '.jpg'],function(err,result) {
        if (err) {
          console.log(err);
        }
        jsonWrite(res, result);
      });
    })
  });
});

//保存文件
function saveFile(music_name, data_mp3, data_lyric, data_image){
  let url_mp3 = '../static/mp3/';
  let url_lyric = '../static/lyric/';
  let url_img = '../static/image/';
  let mp3 = '.mp3';
  let lyric = '.txt';
  let img = '.jpg';
  fs.writeFile(url_mp3 + music_name + mp3, data_mp3,  function(err) {
    if (err) {
      return console.error(err);
    }
  });
  fs.writeFile(url_lyric + music_name + lyric, data_lyric,  function(err) {
    if (err) {
      return console.error(err);
    }
  });
  fs.writeFile(url_img + music_name + img, data_image,  function(err) {
    if (err) {
      return console.error(err);
    }
  });
}
module.exports = router;
