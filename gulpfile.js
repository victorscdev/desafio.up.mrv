'use strict';
const { task, src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const util = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const log = util.log;
const watcherSCSS = watch([
	`./public/assets/scss/**/*.scss`,
	`./src/**/*.scss`,
]);
const watcherJS = watch([`./src/**/*.js`]);

function scss_task() {
	log(`Generate CSS files ${new Date().toString()}`);
	src(`./public/assets/scss/import.scss`)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(sourcemaps.write('.'))
		.pipe(dest(`./public/assets/css`));
}

function javascrip_task() {
	log(`Generate JS files ${new Date().toString()}`);
	src([`./public/assets/js/html-include.js`, `./src/**/*.js`])
		.pipe(sourcemaps.init())
		.pipe(concat(`main.bundle.min.js`))
		.pipe(terser())
		.pipe(sourcemaps.write('.'))
		.pipe(dest(`./public/assets/js`));
}

function watch_gulp() {
	watcherSCSS.on('change', function () {
		scss_task();
	});
	watcherJS.on('change', function () {
		javascrip_task();
	});
}

exports.default = series(watch_gulp);
