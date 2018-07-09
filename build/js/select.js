//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
getList();






//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//获取数据并渲染页面函数
function getList() {
    /*
     @params type
     0:可选
     1:已售
     2:已预订
     */
    var data = {
        code: 1,
        data: [
            {
                rowNum:1,
                children:[
                    {id:1,name: "A-01-01", type: 0, price: 20000},
                    {id:2,name: "A-01-02", type: 1, price: 22000},
                    {id:3,name: "A-01-03", type: 0, price: 30000},
                    {id:4,name: "A-01-04", type: 0, price: 18795},
                    {id:5,name: "A-01-05", type: 0, price: 52347},
                    {id:6,name: "A-01-06", type: 2, price: 20000},
                    {id:7,name: "A-01-07", type: 0, price: 14789},
                    {id:8,name: "A-01-08", type: 0, price: 20147},
                    {id:9,name: "A-01-09", type: 2, price: 20000},
                    {id:10,name: "A-01-10", type: 0, price: 40012},
                    {id:11,name: "A-01-11", type: 0, price: 58791},
                    {id:12,name: "A-01-12", type: 2, price: 36458},
                    {id:13,name: "A-01-13", type: 0, price: 25789},
                    {id:14,name: "A-01-14", type: 0, price: 14789},
                    {id:15,name: "A-01-15", type: 0, price: 36987},
                    {id:16,name: "A-01-16", type: 1, price: 45871},
                    {id:17,name: "A-01-17", type: 0, price: 22222},
                    {id:18,name: "A-01-18", type: 0, price: 33333},
                    {id:19,name: "A-01-19", type: 1, price: 47852},
                    {id:20,name: "A-01-20", type: 0, price: 20000}
                ]
            },
            {
                rowNum:2,
                children:[
                    {id:21,name:"A-02-01",type:0,price:20000},
                    {id:22,name:"A-02-02",type:0,price:22000},
                    {id:23,name:"A-02-03",type:1,price:30000},
                    {id:24,name:"A-02-04",type:0,price:18795},
                    {id:25,name:"A-02-05",type:0,price:52347},
                    {id:26,name:"A-02-06",type:1,price:20000},
                    {id:27,name:"A-02-07",type:0,price:14789},
                    {id:28,name:"A-02-08",type:0,price:20147},
                    {id:29,name:"A-02-09",type:1,price:20000},
                    {id:30,name:"A-02-10",type:0,price:40012},
                    {id:31,name:"A-02-11",type:0,price:58791},
                    {id:32,name:"A-02-12",type:0,price:36458},
                    {id:33,name:"A-02-13",type:2,price:25789},
                    {id:34,name:"A-02-14",type:0,price:14789},
                    {id:35,name:"A-02-15",type:0,price:36987},
                    {id:36,name:"A-02-16",type:0,price:45871},
                    {id:37,name:"A-02-17",type:2,price:22222},
                    {id:38,name:"A-02-18",type:0,price:33333},
                    {id:39,name:"A-02-19",type:0,price:47852},
                    {id:40,name:"A-02-20",type:0,price:20000}
                ]
            },
            {
                rowNum: 3,
                children:[
                    {id:41,name:"A-02-01",type:0,price:20000},
                    {id:42,name:"A-03-02",type:0,price:22000},
                    {id:43,name:"A-03-03",type:2,price:30000},
                    {id:44,name:"A-03-04",type:0,price:18795},
                    {id:45,name:"A-03-05",type:0,price:52347},
                    {id:46,name:"A-03-06",type:2,price:20000},
                    {id:47,name:"A-03-07",type:0,price:14789},
                    {id:48,name:"A-03-08",type:0,price:20147},
                    {id:49,name:"A-03-09",type:0,price:20000},
                    {id:50,name:"A-03-10",type:0,price:40012},
                    {id:51,name:"A-03-11",type:1,price:58791},
                    {id:52,name:"A-03-12",type:0,price:36458},
                    {id:53,name:"A-03-13",type:0,price:25789},
                    {id:54,name:"A-03-14",type:0,price:14789},
                    {id:55,name:"A-03-15",type:1,price:36987},
                    {id:56,name:"A-03-16",type:0,price:45871},
                    {id:57,name:"A-03-17",type:0,price:22222},
                    {id:58,name:"A-03-18",type:1,price:33333},
                    {id:59,name:"A-03-19",type:0,price:47852},
                    {id:60,name:"A-03-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 4,
                children:[
                    {id:61,name:"A-04-01",type:0,price:20000},
                    {id:62,name:"A-04-02",type:0,price:22000},
                    {id:63,name:"A-04-03",type:0,price:30000},
                    {id:64,name:"A-04-04",type:0,price:18795},
                    {id:65,name:"A-04-05",type:0,price:52347},
                    {id:66,name:"A-04-06",type:0,price:20000},
                    {id:67,name:"A-04-07",type:2,price:14789},
                    {id:68,name:"A-04-08",type:0,price:20147},
                    {id:69,name:"A-04-09",type:0,price:20000},
                    {id:70,name:"A-04-10",type:0,price:40012},
                    {id:71,name:"A-04-11",type:0,price:58791},
                    {id:72,name:"A-04-12",type:1,price:36458},
                    {id:73,name:"A-04-13",type:0,price:25789},
                    {id:74,name:"A-04-14",type:0,price:14789},
                    {id:75,name:"A-04-15",type:0,price:36987},
                    {id:76,name:"A-04-16",type:0,price:45871},
                    {id:77,name:"A-04-17",type:0,price:22222},
                    {id:78,name:"A-04-18",type:1,price:33333},
                    {id:79,name:"A-04-19",type:0,price:47852},
                    {id:80,name:"A-04-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 5,
                children:[
                    {id:81,name:"A-05-01",type:0,price:20000},
                    {id:82,name:"A-05-02",type:0,price:22000},
                    {id:83,name:"A-05-03",type:0,price:30000},
                    {id:84,name:"A-05-04",type:0,price:18795},
                    {id:85,name:"A-05-05",type:1,price:52347},
                    {id:86,name:"A-05-06",type:1,price:20000},
                    {id:87,name:"A-05-07",type:0,price:14789},
                    {id:88,name:"A-05-08",type:0,price:20147},
                    {id:89,name:"A-05-09",type:0,price:20000},
                    {id:90,name:"A-05-10",type:0,price:40012},
                    {id:91,name:"A-05-11",type:0,price:58791},
                    {id:92,name:"A-05-12",type:2,price:36458},
                    {id:93,name:"A-05-13",type:2,price:25789},
                    {id:94,name:"A-05-14",type:1,price:14789},
                    {id:95,name:"A-05-15",type:0,price:36987},
                    {id:96,name:"A-05-16",type:0,price:45871},
                    {id:97,name:"A-05-17",type:0,price:22222},
                    {id:98,name:"A-05-18",type:0,price:33333},
                    {id:99,name:"A-05-19",type:0,price:47852},
                    {id:100,name:"A-05-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 6,
                children:[
                    {id:101,name:"A-06-01",type:0,price:20000},
                    {id:102,name:"A-06-02",type:1,price:22000},
                    {id:103,name:"A-06-03",type:1,price:30000},
                    {id:104,name:"A-06-04",type:1,price:18795},
                    {id:105,name:"A-06-05",type:0,price:52347},
                    {id:106,name:"A-06-06",type:0,price:20000},
                    {id:107,name:"A-06-07",type:0,price:14789},
                    {id:108,name:"A-06-08",type:0,price:20147},
                    {id:109,name:"A-06-09",type:0,price:20000},
                    {id:110,name:"A-06-10",type:2,price:40012},
                    {id:111,name:"A-06-11",type:0,price:58791},
                    {id:112,name:"A-06-12",type:0,price:36458},
                    {id:113,name:"A-06-13",type:0,price:25789},
                    {id:114,name:"A-06-14",type:2,price:14789},
                    {id:115,name:"A-06-15",type:0,price:36987},
                    {id:116,name:"A-06-16",type:2,price:45871},
                    {id:117,name:"A-06-17",type:0,price:22222},
                    {id:118,name:"A-06-18",type:0,price:33333},
                    {id:119,name:"A-06-19",type:0,price:47852},
                    {id:120,name:"A-06-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 7,
                children:[
                    {id:121,name:"A-07-01",type:2,price:20000},
                    {id:122,name:"A-07-02",type:0,price:22000},
                    {id:123,name:"A-07-03",type:0,price:30000},
                    {id:124,name:"A-07-04",type:2,price:18795},
                    {id:125,name:"A-07-05",type:0,price:52347},
                    {id:126,name:"A-07-06",type:0,price:20000},
                    {id:127,name:"A-07-07",type:0,price:14789},
                    {id:128,name:"A-07-08",type:0,price:20147},
                    {id:129,name:"A-07-09",type:0,price:20000},
                    {id:130,name:"A-07-10",type:1,price:40012},
                    {id:131,name:"A-07-11",type:0,price:58791},
                    {id:132,name:"A-07-12",type:1,price:36458},
                    {id:133,name:"A-07-13",type:0,price:25789},
                    {id:134,name:"A-07-14",type:0,price:14789},
                    {id:135,name:"A-07-15",type:0,price:36987},
                    {id:136,name:"A-07-16",type:0,price:45871},
                    {id:137,name:"A-07-17",type:0,price:22222},
                    {id:138,name:"A-07-18",type:0,price:33333},
                    {id:139,name:"A-07-19",type:0,price:47852},
                    {id:140,name:"A-07-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 8,
                children:[
                    {id:141,name:"A-08-01",type:0,price:20000},
                    {id:142,name:"A-08-02",type:0,price:22000},
                    {id:143,name:"A-08-03",type:1,price:30000},
                    {id:144,name:"A-08-04",type:0,price:18795},
                    {id:145,name:"A-08-05",type:0,price:52347},
                    {id:146,name:"A-08-06",type:0,price:20000},
                    {id:147,name:"A-08-07",type:2,price:14789},
                    {id:148,name:"A-08-08",type:0,price:20147},
                    {id:149,name:"A-08-09",type:2,price:20000},
                    {id:150,name:"A-08-10",type:0,price:40012},
                    {id:151,name:"A-08-11",type:0,price:58791},
                    {id:152,name:"A-08-12",type:1,price:36458},
                    {id:153,name:"A-08-13",type:0,price:25789},
                    {id:154,name:"A-08-14",type:0,price:14789},
                    {id:155,name:"A-08-15",type:0,price:36987},
                    {id:156,name:"A-08-16",type:0,price:45871},
                    {id:157,name:"A-08-17",type:0,price:22222},
                    {id:158,name:"A-08-18",type:0,price:33333},
                    {id:159,name:"A-08-19",type:0,price:47852},
                    {id:160,name:"A-08-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 9,
                children:[
                    {id:161,name:"A-09-01",type:0,price:20000},
                    {id:162,name:"A-09-02",type:1,price:22000},
                    {id:163,name:"A-09-03",type:1,price:30000},
                    {id:164,name:"A-09-04",type:2,price:18795},
                    {id:165,name:"A-09-05",type:2,price:52347},
                    {id:166,name:"A-09-06",type:0,price:20000},
                    {id:167,name:"A-09-07",type:2,price:14789},
                    {id:168,name:"A-09-08",type:0,price:20147},
                    {id:169,name:"A-09-09",type:2,price:20000},
                    {id:170,name:"A-09-10",type:0,price:40012},
                    {id:171,name:"A-09-11",type:2,price:58791},
                    {id:172,name:"A-09-12",type:0,price:36458},
                    {id:173,name:"A-09-13",type:0,price:25789},
                    {id:174,name:"A-09-14",type:0,price:14789},
                    {id:175,name:"A-09-15",type:0,price:36987},
                    {id:176,name:"A-09-16",type:0,price:45871},
                    {id:177,name:"A-09-17",type:0,price:22222},
                    {id:178,name:"A-09-18",type:0,price:33333},
                    {id:179,name:"A-09-19",type:0,price:47852},
                    {id:180,name:"A-09-20",type:0,price:20000}
                ]

            },
            {
                rowNum: 10,
                children:[
                    {id:181,name:"A-10-01",type:0,price:20000},
                    {id:182,name:"A-10-02",type:0,price:22000},
                    {id:183,name:"A-10-03",type:1,price:30000},
                    {id:184,name:"A-10-04",type:0,price:18795},
                    {id:185,name:"A-10-05",type:2,price:52347},
                    {id:186,name:"A-10-06",type:0,price:20000},
                    {id:187,name:"A-10-07",type:1,price:14789},
                    {id:188,name:"A-10-08",type:0,price:20147},
                    {id:189,name:"A-10-09",type:1,price:20000},
                    {id:190,name:"A-10-10",type:0,price:40012},
                    {id:191,name:"A-10-11",type:2,price:58791},
                    {id:192,name:"A-10-12",type:0,price:36458},
                    {id:193,name:"A-10-13",type:2,price:25789},
                    {id:194,name:"A-10-14",type:0,price:14789},
                    {id:195,name:"A-10-15",type:0,price:36987},
                    {id:196,name:"A-10-16",type:0,price:45871},
                    {id:197,name:"A-10-17",type:0,price:22222},
                    {id:198,name:"A-10-18",type:0,price:33333},
                    {id:199,name:"A-10-19",type:0,price:47852},
                    {id:200,name:"A-10-20",type:0,price:20000}
                ]
            }
        ]
    };
    var html = template("parentTemplate", data);
    $("#content").html(html);
    getWidth();
}


//动态计算宽度函数
function getWidth() {
    var rightNum = $("#content .right");
    var item = $("#content .right .item");
    var width_item = item.width();
    var len_item = 0;
    for (var i = 0; i < rightNum.length; i++) {
        var len = $(rightNum[i]).find("li").length;
        if (len > len_item) {
            len_item = len;
        }
    }
    var width = width_item * len_item + 80;
    $("#content .item_1").width(width);
}


//点击事件函数
function selecthandel(obj) {
    var type = obj.dataset.type;
    var price = obj.dataset.price;
    var name = obj.innerText;
    if (type == "1") {
        alert("已出售，请选择其他!");
    } else if (type == 2) {
        alert("已被预定，请选择其他!");
    } else {
        $("#name").text(name);
        $("#price").text("￥" + price);
        var img = $(obj).find("img")[0];
        var hasSelectItem = $("li[data-type='3");
        hasSelectItem.attr("data-type",0);
        obj.setAttribute("data-type", 3);
        hasSelectItem.find("img").attr("src", "../images/noSell.png");
        img.setAttribute("src", "../images/select.png");
        var btn=document.getElementById("btn");
        btn.setAttribute("class","");
        btn.disabled=false;

    }
}

//定义确定选座函数
function submitFun(id,name,phone,date){
   var params={id:id,name:name,phone:phone,date:date};
   doAjaxPost(config.confirmSelect,params,function(data){
       if(data.code==1){
           //success
       }else{
           //error
           alert(data.msg);
       }
   })
}




//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//按钮点击事件
$("#btn").on("click",function(){
    var name=$("#name").text();
    if(name==""){
        alert("请选择墓型");
        return false;
    }
    $("#window_box").show();
});


//点击弹窗关闭按钮
$("#btn_close").on("click",function(){
    $("#window_box").hide();
});

//点击弹窗确定按钮
$("#btn_submit").on("click",function(e){
    e.stopPropagation();
    var id=parseInt($("li[data-type='3")[0].dataset.id);//获取选中的id值
    var name=$("#user_name").val();
    var phone=$("#user_phone").val();
    var date=$("#book_date").val();
    if(name==""){
        alert("请输入用户名");
    }else if(phone==""){
        alert("请输入电话号码");
    }else if(date==""){
        alert("请选择日期");
    }else{
        $("#window_box").hide();
        submitFun(id,name,phone,date);//模拟调用接口传递id,name,phone,date
    }
});
