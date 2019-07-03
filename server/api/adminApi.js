/* 管理员业务逻辑*/
let models = require('../db');
let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let $sql = require('../map/adminSqlMap');

// 连接数据库
let conn = mysql.createConnection(models.mysql);
conn.connect();

//返回信息
let jsonWrite = function(res, ret, admin_password) {
  if(ret == '') {
    res.json({
      code: '500',
      flag: 'false',
      message: '用户名不正确',
    });
  } else {
    if(admin_password == ret[0].admin_password){
      res.json([{
        code: '200',
        flag: 'true',
        message: '登录成功',
        data: ret,
      }]);
    } else{
      res.json([{
        code: '500',
        flag: 'false',
        message: '密码错误',
      }]);
    }
  }
};

// 登陆
router.post('/admins/admin', (req,res) => {
  let sql=$sql.admins.admin;
  conn.query(sql, req.query.admin_account, function(err,result) {
    if (err) {
      console.log(err);
    }
    jsonWrite(res, result, req.query.admin_password);
  })
});

module.exports = router;
