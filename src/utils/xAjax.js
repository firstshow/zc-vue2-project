/**
 * custom ajax create by ZC 2017／05／13
 * */

function xAjax (url, method, data) {
    return new Promise((resolve, reject)=>{
        ajax({
            url: process.env.API+url, // 请求地址
            type: method, // 请求方式
            data: data, // 请求参数
            success: function (res) {
                // 接收到数据后的操作
                resolve(JSON.parse(res));
            },
            fail: function (status) {
                reject(status);
            }
        })
    })
}

export default xAjax;

function ajax (options) {
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    let xhr;
    // 创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest()
    } else { // IE6及其以下版本浏览器
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
    }

    // 接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            let status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    };

    // 连接 和 发送 - 第二步
    if (options.type === 'GET') { // 普通的get请求
        xhr.open('GET', options.url + '?' + formatParams(options.data), true);
        // xhr.setRequestHeader('access-token', store.state.userInfo.access_token);
        // xhr.setRequestHeader('sign', sign);
        xhr.send(JSON.stringify(options.data))
    } else if (options.type === 'POST') { // 上传from表单格式的数据
        xhr.open('POST', options.url, true);
        // 设置表单提交时的内容类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('access-token', store.state.userInfo.access_token);
        // xhr.setRequestHeader('sign', sign);
        xhr.send(formatParams(options.data));
        // xhr.send(options.data);
    } else if (options.type === 'JSON_POST') { // 上传json格式的数据
        xhr.open('POST', options.url, true);
        // 设置表单提交时的内容类型
        xhr.setRequestHeader('Content-Type', 'application/json');
        // xhr.setRequestHeader('access-token', store.state.userInfo.access_token);
        // xhr.setRequestHeader('sign', sign);
        xhr.send(JSON.stringify(options.data));
    } else if (options.type === 'FILE') { // 上传文件时候的数据
        xhr.open('POST', options.url, true);
        // xhr.setRequestHeader('access-token', store.state.userInfo.access_token);
        // xhr.setRequestHeader('sign', sign);
        xhr.send(options.data);
    }
}
// 格式化参数
function formatParams (data) {
    let arr = [];
    for (let name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
}
