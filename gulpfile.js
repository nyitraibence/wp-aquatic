const { src, dest, parallel, series, watch } = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
var changedInPlace = require('gulp-changed-in-place');
// var php = require('gulp-connect-php');
const browsersync = require('browser-sync').create();


// paths
const paths = {
    assets: "./assets/*",
    styles: {
        src: "./src/styles/**/*.scss",
        dest: "./assets/css/"
    },
    cssVendors: {
        src: "./src/styles/vendors/*.css",
        dest: "./assets/css/"
    },
    js: {
        src: "./src/js/*.js",
        dest: "./assets/js/"
    },
    jsVendors: {
        src: "./src/js/vendors/*.js",
        dest: "./assets/js/"
    },
    img: {
        src: ["./assets/img/raw/*.png", "./assets/img/raw/*.jpg"],
        dest: "./assets/img/"
    },
    html: {
        src: "./*.html"
    },
    php: {
        src: "./*.php"
    }
};

// filenames
const filenames = {
    style: 'main',
    js: 'bundle'
};

// Clean assets
function clear() {
    return src(paths.assets, {
        read: false
    }).pipe(clean());
}

// Optimize images
function img() {
    return src(paths.img.src)
        .pipe(imagemin())
        .pipe(dest(paths.img.dest));
}

// CSS
function css() {
    return src(paths.styles.src)
        .pipe(changed(paths.styles.src))
        .pipe(concat(filenames.style + '.scss'))
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest(paths.styles.dest))
        .pipe(browsersync.stream());
}

// minify Css
function minifyCSS() {
    return src(paths.styles.dest + filenames.style + '.css')
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano({
            autoprefixer: {
                remove: false
            }
        }))
        .pipe(dest(paths.styles.dest));
}	

// CSS Vendors
function cssVendors() {
    return src(paths.cssVendors.src)
        .pipe(concat('mainVendor.min.css'))
        .pipe(cssnano({
            autoprefixer: {
                remove: false
            }
        }))
        .pipe(dest(paths.cssVendors.dest));
}

// JS 
function js() {
    return src(paths.js.src)
        .pipe(changed(paths.js.src))
        .pipe(concat(filenames.js + '.js'))
        // babel could come here
        .pipe(dest(paths.js.dest))
        .pipe(browsersync.stream());
}

// minify JS
function minifyJS() {
    return src(paths.js.dest + filenames.js + '.js')
        .pipe(terser())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest(paths.js.dest));
}

// JS vendors
function jsVendors() {
    return src(paths.jsVendors.src)
        .pipe(concat('mainVendor.js'))
        .pipe(terser())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest(paths.jsVendors.dest));
}

// HTML function 
function streamHTML() {
    return src(paths.html.src)
        .pipe(changedInPlace())
        .pipe(browsersync.stream());
}

// PHP function 
function streamPHP() {
    return src(paths.php.src)
        .pipe(changedInPlace())
        .pipe(browsersync.stream());
}

// Watch files 
function watchFiles() {
    watch(paths.styles.src, css);
    watch(paths.cssVendors.src, cssVendors);
    watch(paths.js.src, js);
    watch(paths.jsVendors.src, jsVendors);
    watch(paths.img.src, img);
    watch(paths.html.src, streamHTML);
    watch(paths.php.src, streamPHP);
}

// PHP server
// function runPHP() {
//     php.server({ base: './', port: 8000, keepalive: true });
// }

// BrowserSync definition
function browserSync() {
    browsersync.init({
        /*proxy: 'localhost:8000',*/
        baseDir: "./",
        open: true,
        notify: false
    });
}


// Complex tasks
const dev = parallel(browserSync, /*runPHP,*/ watchFiles);
const build = series(/* clear, */ parallel(series(css, minifyCSS), series(js, minifyJS), cssVendors, jsVendors, img));
const vendors = parallel(jsVendors, cssVendors);


// Export tasks
exports.clear = clear;
exports.img = img;
exports.watch = dev;
exports.default = build;
exports.vendors = vendors;


// These exported tasks are considered 'public' 
// in the gulp system. 
// They are executable from the command line 
// as: 'gulp <taskName>'