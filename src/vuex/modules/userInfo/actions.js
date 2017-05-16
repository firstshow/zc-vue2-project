/**
 * 异步逻辑封装在action 中 ， 发送指令 ， 改变状态
 * create by ZC 2016/10/16
 * */
import * as types from './types'
import xAjax from 'src/utils/xAjax'

/**
 * 修改个人信息
 * */
export const uploadUserInfo = ({ commit },data ) => {
    return new Promise((resolve, reject) => {
        xAjax('/shop/getRecommendShopList', 'JSON_POST', data).then(res=>{
            commit(types.UPLOAD_USER_INFO, res); // 发送指令，存储数据
            resolve(res);
        }).catch(error=>{
            console.log(error);
        });
    })
}
