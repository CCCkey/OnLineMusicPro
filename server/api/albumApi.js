/* 专辑业务逻辑*/
let models = require('../db');
let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let $sql = require('../map/albumSqlMap');

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

//获取专辑名
router.get('/albums/album_name', (req,res) => {
  let sql=$sql.albums.album_name;
  conn.query(sql, req.query.id, function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result);
  })
});

module.exports = router;
