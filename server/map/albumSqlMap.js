/* 专辑sql语句*/

let albumSqlMap = {

  albums: {
    //获取专辑名
    album_name: 'select album_name from album where id = ?',
    //获得专辑id
    id: 'select id from album where album_name = ?',
  }
};

module.exports = albumSqlMap;
