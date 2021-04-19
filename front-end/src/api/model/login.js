/**
 * login模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块
const BASE_URL = `${base.gateway}/users`
const login = {
    // 新闻列表
    resetPass (name, pass) {
        return axios.post(
            `${BASE_URL}/reset`,
            {
                name: name,
                pass: pass
            }
        );
    },
    signIn (name) {
        return axios.get(`${BASE_URL}?name=${name}`);
    }

    // 其他接口…………
}

export default login;