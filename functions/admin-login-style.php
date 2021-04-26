<?php


function add_login_stylesheet() {
    wp_enqueue_style('custom-login', get_template_directory_uri() . '/assets/css/admin/admin-login-style.css');
}
add_action('login_enqueue_scripts', 'add_login_stylesheet');



function change_login_logo_url() {
	return esc_url(home_url('/'));
}
add_filter('login_headerurl', 'change_login_logo_url');



function change_login_logo_url_title() {
	return "Your site's name";
}
add_filter('login_headertext', 'change_login_logo_url_title');