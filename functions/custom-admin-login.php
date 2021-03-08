<?php


// add custom style for admin login page
function change_login_stylesheet() {
    wp_enqueue_style('custom-login', get_stylesheet_directory_uri() . '/custom-admin-login.css');
}
add_action('login_enqueue_scripts', 'change_login_stylesheet');



// Change the login logo URL 
function change_login_logo_url() {
	return esc_url(home_url('/'));
}
add_filter('login_headerurl', 'change_login_logo_url');



// change login logo title
function change_login_logo_url_title() {
	return "Your site's name";
}
add_filter('login_headertext', 'change_login_logo_url_title');