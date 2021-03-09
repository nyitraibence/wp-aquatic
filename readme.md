# 🌊 &nbsp;&nbsp;gulp-aquatic

Aquatic is a lightweight gulp based frontend workflow optimized for classic sitebuild and wordpress theme development.


## Installation

For installation, you need to have [node.js](https://nodejs.org/en/) on your computer (to be able to use **npm**).

1. **Clone** the **repository** into a local folder
2. **Navigate** into that folder in the **command line**
2. if you don't have the global gulp-cli, install it:&nbsp;&nbsp; `npm install --global gulp-cli`
3. **Install** the project dependencies:&nbsp;&nbsp; `npm i`
4. **Run** the `gulp` **command** to initially build and create your asset files.

And you're ready to go. 

To start development run gulp's watch mode, `gulp watch`.

## Usage
Two main tasks, accessible via the gulp-cli:

### `gulp watch` - for development

* Concatenates Js and SCSS Source files
* Compiles SCSS to CSS
* Watches the files and reloads the browser on source change

### `gulp` - for production (default task)

* Cleans asset folder from 'leftovers'
* Concatenates Js and SCSS source files
* Compiles SCSS to CSS
* Minifies Js and CSS outputs
* Optimizes images

Some of these sub-tasks can be run separately aswell, if needed. See `gulp --tasks` for options. Easily extensible with additional features in the pipeline. You can find more help with this in the Gulp Documentation: [https://gulpjs.com/docs/en/getting-started/quick-start/](https://gulpjs.com/docs/en/getting-started/quick-start/)

The browserSync will not work if the html/php template doesn't have a body tag. It's just how the module works.

### Notes:
- gulp-terser is used instead of popular gulp-uglify: In the field of Js compression terser shows slightly better performance, and it is ES6 compatible - uglify is not.
- Media query grouping is omitted from the pipeline. According to my researches, grouped/ungrouped media querys barely show any difference in performance, even in larger projects. And the less step there is in the pipeline, the faster, cleaner it is. Therefore, it is omitted.
<!-- 
Choosing BrowserSync over Livereload: It is not constrained to a single device, it works across desktop and mobile devices at the same time. It will update code changes, synchronize scroll positions and form inputs automatically across all browsers and devices. Also it doesn't need a browser plugin.
More: [https://www.slant.co/versus/5065/5066/~livereload_vs_browsersync](https://www.slant.co/versus/5065/5066/~livereload_vs_browsersync)
-->
- Gulpfile path expressions: one place where you can truly save execution time is the file source regex. The more specific path you give, the faster it will find what it needs. The current version uses pretty generic paths, yet fast. If your project structure allows, give it exactly where to look, and not 'everywhere' with exceptions. If you want to place your file in a random place, no problem, just specify that random place for gulp.

#### Handy features to add:
- cache busting
- error screens
- sourcemaps
- babel

***

The project is optimal for classic site building, and Wordpress theme development. For more 'Js heavy' projects, consider using a webpack configuration, as it is more suited for that.






***

## WP part:

add `define( 'WP_ENVIRONMENT_TYPE', 'development' );` to wp-config.php

Plugins:
- Velvet Blues Update URLs
- Classic Editor
- ACF

Post-deployment plugins:
- W3 Total Cache
- Yoast SEO
- Wordfence
