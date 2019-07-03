/* 管理员SQL语句*/

let adminSqlMap = {

  admins: {
    // 登录
    admin:'select admin_password from admin  where admin_account = ?',
  }
};

module.exports = adminSqlMap;
