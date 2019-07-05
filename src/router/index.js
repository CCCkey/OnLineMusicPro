import Vue from 'vue'
import Router from 'vue-router'
// import Axios from 'axios'
import Home from '@/components/Home'
import Category from '@/components/Category'
import CateList from '@/subComponent/cateList'
import AllMusic from '@/subComponent/allMusic'
import MusicPlay from '@/components/musicPlay'

Vue.use(Router);
// 测试前后端数据交互和跨域
// Vue.prototype.$axios = ajax;
// ajax.defaults.baseURL = '/api';
// ajax.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false;

// ajax.get('/musicApi/musics/click_number').then(function (respond) {
//   console.log(respond);
// });

export default new Router({
  // linkActiveClass: 'myactive',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/',
          name: 'AllMusic',
          component: AllMusic,
        },
        {
          path: 'type/:type_name',
          name: 'CateList',
          component: CateList,
        }
      ]
    },
    {
      path: '/MusicPlay',
      name: 'MusicPlay',
      component: MusicPlay
    }
  ]
})
