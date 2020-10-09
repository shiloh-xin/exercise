import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// import axios from 'axios';
// axios.defaults.baseURL = 'https://m.maizuo.com/';
// axios.interceptors.request.use(
//     function(config) {
//         config.headers = {
//             'X-Client-Info':
//                 '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022268312862711666900993","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.film.list',
//         };
//         return config;
//     },
//     function(err) {}
// );
// axios.get('gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4383165');

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
