var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sassImport = require('gulp-sass-import');
var browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

function sass_style(done){
    gulp.src('./scss/*-style.scss')
    .pipe(sassImport({
        filename : '_file',
        marker : '/*'
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .on('error', console.error.bind(console))
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
  
    
    done();
}

function reload(done){
    browserSync.reload();

    done();
}

function sync(done){
    browserSync.init({
        server:{
            baseDir: './'
        },
        port: 3000
    })

    done();
}

function Watch(done){
    gulp.watch('./scss/**/*', sass_style)
    gulp.watch('./scss/**/*', reload)
    gulp.watch('./*.html', reload)
}

gulp.task('default', gulp.parallel(sync, Watch))