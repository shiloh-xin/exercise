// 发送具体的请求
import http from '@/api/http';
import {
    nowPlayingListUrl,
    comingSoonListUrl,
    movieDetail,
} from '@/config/url';

export const nowPlayingListData = pageNum => {
    http.defaults.headers.info = 'film';
    return http.get(nowPlayingListUrl + pageNum);
};

export const comingSoonListData = pageNum => {
    // http.defaults.headers.info = 'film';
    return http.get(comingSoonListUrl + pageNum);
};
export const movieDetailData = filmId => {
    http.defaults.headers.info = 'info';
    return http.get(movieDetail + filmId);
};
