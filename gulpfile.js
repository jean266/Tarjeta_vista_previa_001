import { src, dest, watch, series } from 'gulp';
import * as darkSass from "sass";
import gulpSass from "gulp-sass";
import terser from 'gulp-terser';

const sass = gulpSass(darkSass);

export function css (done) {
    src('src/scss/app.scss', {sourcemaps : true})
    .pipe(sass({
        outputStyle : 'compressed'
    })).on('error', sass.logError)
    .pipe(dest('public/build/css', {sourcemaps : '.' }))

    done();
}

export function js (done) {
    src('src/js/**/*.js')
    .pipe(terser())
    .pipe(dest('public/build/js'))

    done();
}

export function dev (done) {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)

    done();
}