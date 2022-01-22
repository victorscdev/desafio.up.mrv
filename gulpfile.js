'use strict';
const { task, src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const util = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const log = util.log;
const watcher = watch([`./public/assets/scss/**/*.scss`]);

function sass_to_css() {
	log(`Generate CSS files ${new Date().toString()}`);
	src(`./public/assets/scss/import.scss`)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(sourcemaps.write())
		.pipe(dest(`./public/assets/css`));
}

function watch_gulp() {
	watcher.on('change', function () {
		sass_to_css();
	});
}

exports.default = series(watch_gulp);
