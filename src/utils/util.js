/**
 * 定义全局函数，或者单独引用
 * */

/**
 * 微信浏览器中设置对应页面的标题
 * 解决：IOS微信浏览器中用document.title 设置标题无效
 * */
export const setTitle = (title) => {
    var body = document.getElementsByTagName('body')[0];
    document.title = title;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "http://sh.51youdian.com/Public/Index/images/navbar/nav-logo.png");
    iframe.setAttribute("style", "display:none");
    iframe.addEventListener('load', function() {
        setTimeout(function() {
            try{
                iframe.removeEventListener('load');
            }catch (err){}
            document.body.removeChild(iframe);
        }, 0);
    });
    try{
        document.body.appendChild(iframe);
    }catch (err){}
};

/**
 * 浮点数加法
 * */
export const addition = (arg1,arg2)=>{
    var r1,r2,m;
    if(parseInt(arg1)==arg1){
        r1=0;
    }else{
        r1=arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2)==arg2){
        r2=0;
    }else{
        r2=arg2.toString().split(".")[1].length
    }
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

/**
 * 浮点数减法
 * */
export const subtraction = (arg1, arg2)=>{
    var c = 0,
        d = arg1.toString(),
        e = arg2.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) {}
    try {
        c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

/** 浮点数乘法*/
export const multiplication = (arg1, arg2)=>{
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

/** 浮点数除法*/
export const division = (arg1, arg2)=> {
    var c, d, e = 0,
        f = 0;
    try {
        e = arg1.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = arg2.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(arg1.toString().replace(".", "")), d = Number(arg2.toString().replace(".", "")), this.mul(c / d, Math.pow(10, f - e));
}

/**
 * 对象的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
export const objDeepCopy = (source) => {
    let sourceCopy = {};
    for (let item in source) sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item];
    return sourceCopy;
}

/**
 * 对象数组的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
export const objArryDeepCopy = (source) => {
    let sourceCopy = source instanceof Array ? [] : {};
    for (let item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? objArryDeepCopy(source[item]) : source[item];
    }
    return sourceCopy;
}

/**
 * 将更新后的信息，存储到sessionStorage中
 * 及需要暂时保存在本地的数据 关闭浏览器后及清除
 * */
export const setSessionStorage = (key,value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * 将更新后的信息，存储到localStorage中
 * 及需要永久保存在本地的数据 关闭浏览器后也还存在的
 * */
export const setLocalStorage = (key,value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * 获取存储在sessionStorage中的数据
 * */
export const getSessionData = key => window.sessionStorage.getItem(key);

/**
 * 获取存储在localStorage中的数据
 * */
export const getLocalStorage = key => window.localStorage.getItem(key);
