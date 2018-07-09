

//点击导航切换路径
$(".nav li").on("click", function () {
    var dataSrc = $(this).attr("data-src");
    var imgSrc= $(this).find("img")[0];
    $(imgSrc).attr("src","../images/"+dataSrc+"_active.png");
    var siblings=$(this).siblings();
    siblings.forEach(function(item){
        var img=$(item).find("img")[0];
        var imgSrc=$(img).attr("src").replace("_active","");
        $(img).attr("src",imgSrc);
    });
    if(dataSrc=="mxtj"){
        parent.location.href="../view/sort.html";
    }else{
       $("#iframe").attr("src",dataSrc+".html");
    }
});