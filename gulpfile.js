//引入插件
var gulp=require("gulp");
var plugins=require("gulp-load-plugins")();//导入所有已经安装的插件
var open=require("open");
//定义path
var app={
    srcPath:"src/",
    devPath:"build/",
    prdPath:"dist/"
};

//把bower_components文件夹下面的所有文件写入vendor文件夹
gulp.task("lib",function(){
    gulp.src("bower_components/**/*")
    .pipe(gulp.dest(app.devPath+"vendor"))
    .pipe(gulp.dest(app.prdPath+"vendor"))
    .pipe(plugins.connect.reload());
});


//把根目录的图标文件写入到build和dist文件夹
gulp.task("iconFond",function(){
    gulp.src(app.srcPath+"**/*.ico")
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.prdPath))
});

//把src文件夹中的所有html文件写入到build和dist文件夹
    gulp.task("html",function(){
    var options = {
            removeComments: true,//清除HTML注释
            collapseWhitespace: true//压缩HTML
        };
   gulp.src(app.srcPath+"**/*.html")
   .pipe(gulp.dest(app.devPath))
   .pipe(plugins.htmlmin(options))
   .pipe(gulp.dest(app.prdPath))
   .pipe(plugins.connect.reload());
});




//把src/css中所有的less文件夹合并压缩后为index.css文件写入到build/css和dist/css
gulp.task("less",function(){
    gulp.src(app.srcPath+"style/style.less")
        .pipe(plugins.less())
        .pipe(gulp.dest(app.devPath+"css"))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest(app.prdPath+"css"))
        .pipe(plugins.connect.reload());
});


gulp.task("js",function(){
     gulp.src(app.srcPath+"script/**/*.js")
     .pipe(gulp.dest(app.devPath+"js"))
     .pipe(plugins.uglify())
     .pipe(gulp.dest(app.prdPath+"js"))
     .pipe(plugins.connect.reload());
 });




//把src/images中所有图片文件合并压缩并写入到build/js和dist/js文件中
gulp.task("image",function(){
    gulp.src(app.srcPath+"images/**/*")
        .pipe(gulp.dest(app.devPath+"images"))
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(app.prdPath+"images"))
        .pipe(plugins.connect.reload());
});


//编写总得构建命令
gulp.task("build",["lib","html","less","js","image","iconFond"]);


//清除build和dist文件夹
gulp.task("clean",function(){
    gulp.src([app.devPath,app.prdPath])
    .pipe(plugins.clean());
});



//编写服务
gulp.task("server",function(){
   plugins.connect.server({
       root:[app.devPath],
       livereload:true,
       port:6688
   });
    //open("http://localhost:6688/view/index.html");
    open("http://192.168.0.106:6688/view/index.html");
    gulp.watch("bower_components/**/*",["lib"]);
    gulp.watch(app.srcPath+"view/**/*.html",["html"]);
    gulp.watch(app.srcPath+"style/**/*.less",["less"]);
    gulp.watch(app.srcPath+"script/**/*.js",["js"]);
    gulp.watch(app.srcPath+"images/**/*",["image"]);
});

gulp.task("default",["server"]);







