//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数调用分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓

getListData();//调用获取数据并渲染函数
getDateList();//调用获取日期并渲染函数



//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓函数定义分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
//定义获取数据并渲染函数
function getListData(){
    //模拟接口返回的数据
    var data={
        list:[
            {name:"测试1",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试2",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试3",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试4",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试5",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试6",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试7",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试8",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试9",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试10",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试11",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试12",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试13",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试14",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试15",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试16",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试17",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试18",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试19",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"},
            {name:"测试20",one:"06:10",two:"08:00",three:"10:00",four:"14:00",five:"16:00",six:"18:00"}
        ]
    };
    var html=template("list-template",data);
    $("#table-content").html(html);
}


//定义获取日期数据函数并渲染
function getDateList(){
    var arr=[];
    for(var i=0;i<7;i++){
        var date=getDay(i);
        arr.push(date);
    }
    $("#text-show").text(arr[0]);//设置显示默认今天日期
    var data={list:arr};
    var html=template("date-list-template",data);
    $("#date-list").html(html);
}



 //定义获取指定日期函数
function getDay(day){
    var today = new Date();
    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;
}

//定义处理月份函数
function doHandleMonth(month){
    var m = month;
    if(month.toString().length == 1){
        m = "0" + month;
    }
    return m;
}


//〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓点击事件分割线〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓
 //点击日期选择框
$("#date-box").on("click",function(){
   $("#date-list").show();
});

//点击日期列表
$("#date-list li").on("click",function(){
    event.stopPropagation();
    $(this).addClass("active").siblings().removeClass();
    var text=$(this).text();
    $("#text-show").text(text);
    $("#date-list").hide();
});

//时刻表切换
$(".toggle span").on("click",function(){
    //判断当前是否是active状态
    var state=$(this).hasClass("active");
    if(!state){
        $(this).addClass("active").siblings().removeClass("active");
        var type=$(this).attr("data-type");//拿到当前点击的type来传递给接口请求数据
        alert("切换到type:"+type);
    }else{
        alert("已经是激活状态!");
    }
});