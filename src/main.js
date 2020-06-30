// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.scss'
import myHttpServer from '@/plugins/http.js'
import moment from 'moment'

Vue.use(ElementUI);
Vue.use(myHttpServer);
//全局过滤器，处理日期
Vue.filter('fmtdate', (v) => {
    return moment(v).formate('YYYY-MM-DD');
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})