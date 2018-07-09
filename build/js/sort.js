//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
getTypeList();//调用分类
getPriceList();//调用价格
getListData();//调用数据列表函数




//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数定义分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//定义获取类型并渲染函数
function getTypeList() {
    //模拟接口数据
    var data = {
        code: 1,
        list: [
            {id: 1, typeName: "sort1"},
            {id: 2, typeName: "sort2"},
            {id: 3, typeName: "sort3"},
            {id: 4, typeName: "sort4"},
            {id: 5, typeName: "sort5"}
        ]
    };
    var html = template("type-list-template", data);
    var active = '<span class="active">全部</span>';
    $("#type-list").html(active + html);
}


//定义获取价格并渲染函数
function getPriceList() {
    //模拟接口数据
    var data = {
        code: 1,
        list: [
            {id: 1, price: "0-3万"},
            {id: 2, price: "3-5万"},
            {id: 3, price: "5-10万"},
            {id: 4, price: "10-15万"},
            {id: 5, price: "15万以上"}
        ]
    };
    var html = template("price-list-template", data);
    var active = '<span class="active">全部</span>';
    $("#price-list").html(active + html);
}


//定义获取数据列表函数
function getListData() {
    //模拟接口数据
    var data = {
        code: 1,
        list: [
            {id: 1, name: "测试1", imagePath: "../images/test/1.jpg", areaName: "区间1", price: 10000},
            {id: 2, name: "测试2", imagePath: "../images/test/2.jpg", areaName: "区间2", price: 20000},
            {id: 3, name: "测试3", imagePath: "../images/test/3.jpg", areaName: "区间3", price: 145877},
            {id: 4, name: "测试4", imagePath: "../images/test/4.jpg", areaName: "区间4", price: 12457},
            {id: 5, name: "测试5", imagePath: "../images/test/5.jpg", areaName: "区间5", price: 54789},
            {id: 6, name: "测试6", imagePath: "../images/test/6.jpg", areaName: "区间6", price: 34578},
            {id: 7, name: "测试7", imagePath: "../images/test/7.jpg", areaName: "区间7", price: 98514},
            {id: 8, name: "测试8", imagePath: "../images/test/8.jpg", areaName: "区间8", price: 14785},
            {id: 9, name: "测试9", imagePath: "../images/test/9.jpg", areaName: "区间9", price: 32011},
            {id: 10, name: "测试10", imagePath: "../images/test/10.jpg", areaName: "区间10", price: 22222},
            {id: 11, name: "测试11", imagePath: "../images/test/11.jpg", areaName: "区间11", price: 35410},
            {id: 12, name: "测试12", imagePath: "../images/test/12.jpg", areaName: "区间12", price: 30002},
            {id: 13, name: "测试13", imagePath: "../images/test/13.jpg", areaName: "区间13", price: 47852},
            {id: 14, name: "测试14", imagePath: "../images/test/14.jpg", areaName: "区间14", price: 98745},
            {id: 15, name: "测试15", imagePath: "../images/test/15.jpg", areaName: "区间15", price: 10001}
        ],
        msg: ""
    };
    var html = template("list-template", data);
    $("#list").html(html);
    page(100,function(currentPage){
        console.log("当前点击的页数为："+currentPage);
    });
}

















//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓点击事件分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//类型点击事件
$("#type-list span").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
});


//价格点击事件
$("#price-list span").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
});

