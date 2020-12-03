/**
 * login模块接口列表
 */

import base from '../base'; // 导入接口域名列表
import axios from '@/request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const login = {
    // 新闻列表
    resetPass (id) {
        console.log(axios.put(`${base.panda}/${id}`))
        return axios.post(`${base.panda}`);
    },
    signIn (params) {
        // console.log(qs.stringify(params))
        return axios.put(`${base.panda}/maintenance-clientapi/v3/employee/sign-in`, qs.stringify(params));
    }

    // 其他接口…………
}

export default login;