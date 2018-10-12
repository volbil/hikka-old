var browserSync = require('browser-sync'),
    historyFallback = require('connect-history-api-fallback'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify-es').default,
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    riot = require('gulp-riot'),
    path = require('path'),
    del = require('del');

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('less', function() {
    return gulp.src('app/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }).on('error', notify.onError()))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('riot', function() {
    return gulp.src('app/**/*.tag')
        .pipe(riot({
            compact: true,
        }))
        .pipe(uglify({
            output: {
                comments: /^!/
            }
        }).on("error", notify.onError()))
        .pipe(concat('tags.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('libs', function() {
    return gulp.src('app/libs/css/*.css')
        .pipe(cssnano())
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('img', function() {
    return gulp.src([
            '!app/img/src',
            'app/img/**/*'
        ])
        .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function() {
    return gulp.src([
            '!app/js/main.js',
            '!app/js/tags.js',
            'app/libs/js/jquery.min.js',
            'app/libs/js/riot.js',
            'app/libs/js/riot-route.js.js',
            'app/libs/js/**/*.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app',
            middleware: [
                historyFallback()
            ]
        },
        notify: false
    });
});



gulp.task('watch', ['browser-sync', 'less', 'libs', 'scripts'], function() {
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/libs/js/**/*.js', ['scripts']);
    gulp.watch('app/libs/css/**/*.css', ['libs']);
    gulp.watch('app/tags/**/*.tag', ['riot']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/**/*.json', browserSync.reload);
    gulp.watch('app/**/*.html', browserSync.reload);
});

gulp.task('build', ['clean', 'img'], function() {

    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'));

    var buildIndex = gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));

    var buildFavicon = gulp.src('app/favicon.*')
        .pipe(gulp.dest('dist/'));

});