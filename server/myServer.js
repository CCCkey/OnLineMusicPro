/* node 后端服务器*/

const musicApi = require('./api/musicApi');
const adminApi = require('./api/adminApi');
const typeApi = require('./api/typeApi');
const commentApi = require('./api/commentApi');
const albumApi = require('./api/albumApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/musicApi', musicApi);
app.use('/api/adminApi', adminApi);
app.use('/api/typeApi', typeApi);
app.use('/api/commentApi', commentApi);
app.use('/api/albumApi', albumApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
