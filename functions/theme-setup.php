<?php

function theme_setup(){

    // The WP way to generate the title tag dynamically for your site
    add_theme_support('title-tag');

    // Enable post thumbnails
    add_theme_support('post-thumbnails');

    // Register WordPress nav menu
    register_nav_menu('header', 'Header menu');

}
add_action('after_setup_theme', 'theme_setup');