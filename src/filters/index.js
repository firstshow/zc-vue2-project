/**
 * 格式化时间
 *
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
    if(!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {

        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}

/**
 * 时间挫转时间
 * @param val 传入的时间挫
 * @param type 需要转换的类型  YYYY-MM-DD ： 只需要日期 ； YYYY-MM-DD HH:MM:SS ： 日期加时分秒
 * 如只需要如期，则startNum ： 0 ， endNum ： 10
 */
export const transitionDate = (val,type) => {
    val = val*1 < 100000000000 ? val*1000 : val; // 当不是毫秒时候，转换为毫秒

    let date = new Date(val),
    year=date.getFullYear(),
    month= ('0' + (date.getMonth() + 1)).slice(-2),
    day= ('0' + date.getDate()).slice(-2),
    hour= ('0' + date.getHours()).slice(-2),
    minute= ('0' + date.getMinutes()).slice(-2),
    second= ('0' + date.getSeconds()).slice(-2);

    switch (type){
        case 'YYYY-MM-DD' :
            return   year+"-"+month+"-"+day;
            break;
        case 'HH:MM:SS' :
            return   hour+":"+minute+":"+second;
            break;
        default :
            return   year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
            break;
    }
};
