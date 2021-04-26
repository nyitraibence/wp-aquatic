<?php 
function load_custom_wp_admin_style(){
    wp_register_style( 'custom_wp_admin_css', get_template_directory_uri() . '/assets/css/admin/admin-style.css', false, '1.0.0' );
    wp_enqueue_style( 'custom_wp_admin_css' );
}
add_action('admin_enqueue_scripts', 'load_custom_wp_admin_style');