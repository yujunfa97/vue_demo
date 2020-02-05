import axios from './axios-base';
import _ from 'lodash';

// 通过API.name设置请求方法类型
let getMethodType = api => {
    // console.log('开始解析API请求方法...');

    console.log(api);
    if (api.name && ['GET', 'POST', 'PUT', 'DELETE'].includes(api.method)) {
        return api.method;
    }

    let method;
    if (api.name.startsWith('get')) {
        method = 'GET';
    } else if (api.name.startsWith('create')) {
        method = 'POST';
    } else if (api.name.startsWith('update')) {
        method = 'PUT';
    } else if (api.name.startsWith('delete')) {
        method = 'DELETE';
    } else {
        throw new Error('如果没有设置method参数，方法名必须以get，create，udpate，delete开头');
    }

};

let getPathParams = function (url) {
    let regex = /{([^}]+)}/g;
    let pathParams = [];
    let currentMatch;
    while (currentMatch = regex.exec(url)) {
        pathParams.push(currentMatch[1]);
    }
    return pathParams;
};

let parseAjaxMethod = api =>
    (param = {}) => {
        let method = getMethodType(api);
        let url = api.url;

        if (_.isUndefined(param.data)) {
            param.data = {};
        }

        param = _.merge({
            url,
            method,
        }, param);

        return axios(param);
};

export const build = apis => {
    _.forIn(apis, (v, k) => {
        console.log(v);
        console.log(k);
        let newVal = {};
        if (v.length) {
            v.forEach(api => {
                newVal[api.name] = parseAjaxMethod(api);
            })
        }
        apis[k] = newVal;
    });
    console.log(apis);
    return apis;
};
