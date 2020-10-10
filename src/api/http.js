import axios from 'axios';
axios.defaults.baseURL = 'https://m.maizuo.com/';

axios.interceptors.request.use(
    function(config) {
        let host = '';
        let info = config.headers.info;
        if (info == 'film') {
            host = 'mall.film-ticket.film.list';
        }
        if (info == 'cinema') {
            host = 'mall.film-ticket.cinema.list';
        }
        if (info == 'info') {
            host = 'mall.film-ticket.film.info';
        }

        config.headers = {
            'X-Client-Info':
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022268312862711666900993","bc":"310100"}',
            'X-Host': host,
        };

        return config;
    },
    function(err) {
        // 错误处理
    }
);

export default axios;
