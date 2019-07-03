import Vue from 'vue'
import ajax from 'axios'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);
// 测试前后端数据交互和跨域
Vue.prototype.$axios = ajax;
ajax.defaults.baseURL = '/api';
ajax.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false;

ajax.get('/musicApi/musics/click_number').then(function (respond) {
  console.log(respond);
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
