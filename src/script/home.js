//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
getList();







//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数定义分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//获取数据并渲染
function getList(){
    var data={
        list:[
            {id:1,name:"测试一",imagePath:"../images/test/1.jpg",price:10000},
            {id:2,name:"测试二",imagePath:"../images/test/2.jpg",price:20000},
            {id:3,name:"测试三",imagePath:"../images/test/3.jpg",price:25000},
            {id:4,name:"测试四",imagePath:"../images/test/4.jpg",price:32000},
            {id:5,name:"测试五",imagePath:"../images/test/5.jpg",price:14879},
            {id:6,name:"测试六",imagePath:"../images/test/6.jpg",price:24758},
            {id:7,name:"测试七",imagePath:"../images/test/7.jpg",price:25874},
            {id:8,name:"测试八",imagePath:"../images/test/8.jpg",price:66666},
            {id:9,name:"测试九",imagePath:"../images/test/9.jpg",price:88888},
            {id:10,name:"测试十",imagePath:"../images/test/10.jpg",price:47895},
            {id:11,name:"测试十一",imagePath:"../images/test/11.jpg",price:14789},
            {id:12,name:"测试十二",imagePath:"../images/test/12.jpg",price:32145},
            {id:13,name:"测试十三",imagePath:"../images/test/13.jpg",price:58741},
            {id:14,name:"测试十四",imagePath:"../images/test/14.jpg",price:21478},
            {id:15,name:"测试十五",imagePath:"../images/test/15.jpg",price:35874}
        ]
    };
    var html=template("template-list",data);
    $("#list").html(html);
    //调用分页
    page(100,function(currentPage){
        alert("当前点击的页数为："+currentPage);
    });
}


//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓点击事件分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
