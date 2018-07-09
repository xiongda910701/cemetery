document.getElementsByTagName('html')[0].style.fontSize = 1024 / 10 + 'px';


//配置服务器
var serverUrl = "http://wx.bncry.cn/pet/api"; //服务器
var serverUrl = "http://wx.bncry.cn/pet/api"; //本地


var config = {
    getHomeData: serverUrl + "/wechat/home/index",
    confirmSelect:serverUrl+"/api/home/submit"
};



//定义请求函数
function doAjaxPost(url, params, callback) {
    $.ajax({
        url: url,
        type: 'POST',
        timeout: 30000,
        data: params,
        beforeSend: function () {

        },
        success: function (data) {
            Debugger.log("----------------------请求成功分隔线开始--------------------------------");
            Debugger.log("接口名:" + url);
            Debugger.log(params);
            Debugger.log("----------------------请求成功分隔线结束--------------------------------");
            loading.stopLoading();
            if (data.status == "success") {
                callback(data);
            } else {
                alert(data.message);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            Debugger.log("----------------------请求失败分隔线开始--------------------------------");
            Debugger.log("接口名:" + url);
            Debugger.log(params);
            Debugger.log(XMLHttpRequest);
            Debugger.log(textStatus);
            Debugger.log(errorThrown);
            Debugger.log("----------------------请求失败分隔线结束--------------------------------");
        }
    });
}

//重写console.log()函数
var Debugger = function () {
};
//开关，是否显示输出
Debugger.switch = true;
Debugger.log = function (message) {
    try {
        if (Debugger.switch) {
            console.log(message);
        }
    } catch (exception) {
        return 'Error:the function  log is not exist.';
    }
};


//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}





//验证手机号码
function checkMobile(str) {
    var re = /^1\d{10}$/;
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}


//禁止用户双指缩放页面(兼容ios10)
document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);


//禁止用户双击缩放页面(兼容ios10)
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);




//分页函书封装
function page(total,callback){
    pageUtil.initPage('page', {
        totalCount: total,//总页数，一般从回调函数中获取。如果没有数据则默认为1页
        curPage: 1,//初始化时的默认选中页，默认第一页。如果所填范围溢出或者非数字或者数字字符串，则默认第一页
        showCount: 6,//分页栏显示的数量
        pageSizeList: [5, 10, 15, 20, 25, 30],//自定义分页数，默认[5,10,15,20,50]
        defaultPageSize: 10,//默认选中的分页数,默认选中第一个。如果未匹配到数组或者默认数组中，则也为第一个
        isJump: true,//是否包含跳转功能，默认false
        isPageNum: false,//是否显示分页下拉选择，默认false
        isPN: true,//是否显示上一页和下一面，默认true
        isFL: true,//是否显示首页和末页，默认true
        jump: function (curPage) {//跳转功能回调，传递回来2个参数，当前页和每页大小。如果没有设置分页下拉，则第二个参数永远为0。这里的this被指定为一个空对象，如果回调中需用到this请自行使用bind方法
            var currentPage=curPage;
            callback(currentPage);
        }
    });
}
