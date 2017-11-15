var gulp = require('gulp');
// 引入组件
// var htmlmin = require('gulp-htmlmin'), //html压缩
//     minifycss = require('gulp-minify-css'),//css压缩
//     jshint = require('gulp-jshint'),//js检测
//     uglify = require('gulp-uglify'),//js压缩
//     concat = require('gulp-concat'),//文件合并
//     rename = require('gulp-rename'),//文件更名
var    notify = require('gulp-notify');//提示信息
// 引入compass插件处理生成压缩CSS，后续不再处理css
var sass = require('gulp-sass');
//var spriter = require('gulp-css-spriter');

gulp.task('sass', function() {
  gulp.src('./app/style/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'//不压缩css文件
    }))
    .pipe(gulp.dest('./app/style')) //将生成好的css文件放到style文件夹下
   // .pipe(gulp.dest('./dest/stylesheet/'))
    .pipe(notify({ message: 'scss compile ok~' }));
});
/*
gulp.task('sprite', function() {
  gulp.src('./css/*.css')
    .pipe(spriter({
      // The path and file name of where we will save the sprite sheet
            'spriteSheet': './images/spritesheet.png', //这是雪碧图自动合成的图。 很重要
            // Because we don't know where you will end up saving the CSS file at this point in the pipe,
            // we need a litle help identifying where it will be.
            'pathToSpriteSheetFromCSS': '../../images/spritesheet.png' //这是在css引用的图片路径，很重要
    }))
    .pipe(gulp.dest('./dist/css'));
});
*/
// // 压缩html
// gulp.task('html', function() {
//   return gulp.src('./*.html')
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('./dest'))
//     .pipe(notify({ message: 'html task ok' }));

// });

// // 检查js
// gulp.task('lint', function() {
//   return gulp.src('./js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     .pipe(notify({ message: 'lint task ok' }));
// });

// // 合并、压缩js文件
// gulp.task('js', function() {
//   return gulp.src('./js/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('dest/js'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(uglify())
//     .pipe(gulp.dest('dest/js'))
//     .pipe(notify({ message: 'js task ok' }));
// });
// 默认任务
gulp.task('default',['sass'], function(){

  // 监听html文件变化
  // gulp.watch('src/*.html', function(){
  //   gulp.run('html');
  // });

  // // Watch .css files
  // //gulp.watch('src/css/*.css', ['css']);
  gulp.watch('./app/style/*.scss',['sass']);
  //gulp.run('sprite');
  // // Watch .js files
  // gulp.watch('src/js/*.js', ['lint', 'js']);

});
