import axios from 'axios'

// 设置统一请求接口
axios.defaults.baseURL = '/apis';

// 设置请求的超时时间 ms
axios.defaults.timeout = 10000;

// 设置POST请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 拦截请求
axios.interceptors.request.use(
    request => {
        console.log('拦截请求 onFulfilled');
        return request
    },
    error => {
        console.log('拦截请求 onRejected');
        return Promise.reject(error);
    }
);

// 拦截响应
axios.interceptors.response.use(
    response => {
        console.log('拦截响应 onFulfilled');
        return response;
    },
    error => {
        console.log('拦截响应 onRejected');
        return Promise.reject(error);
    }
);

export default axios
