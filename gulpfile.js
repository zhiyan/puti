var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});
var pngquant = require('imagemin-pngquant');

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('images',function(){
    //combine all template files of the app into a js file
    gulp.src(['./app/images/**/*'])
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./build/images/'));
});

gulp.task('sass', function(){
    gulp.src('./app/app.scss')
        .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([
            './bower_components/angular/angular.js',
            './bower_components/angular-route/angular-route.js',
            './bower_components/pickadate/lib/picker.js',
            './bower_components/pickadate/lib/picker.date.js',
            './bower_components/moment/moment.js',
        ])
        .pipe(plugins.concat('lib.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src([
            './bower_components/angular/angular-csp.css',
            './bower_components/normalize-css/normalize.css',
            './bower_components/pickadate/lib/themes/default.css',
            './bower_components/pickadate/lib/themes/default.date.css'
        ])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')    
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-fonts', function() {
    gulp.src('./app/libs/flexslider/fonts/**')    
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy-data', function() {
    gulp.src('./app/data/**/*')    
        .pipe(gulp.dest('./build/data/'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.css',
        'build/images/**/*'        
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch(['./app/app.scss','./app/**/*.scss'],['sass']);
    gulp.watch('./app/index.html',['copy-index']);
    gulp.watch('./app/images/**/*',['images']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',['connect','scripts','templates','sass','copy-index','copy-fonts','copy-data','vendorJS','vendorCSS','images','watch']);