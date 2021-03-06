<?php


function add_scripts(){  

    wp_enqueue_script('jquery');
    wp_enqueue_style('vendor-style', get_template_directory_uri() . '/assets/css/mainVendor.min.css', null, ASSETS_VERSION);
    wp_enqueue_script('vendor-scripts', get_template_directory_uri() . '/assets/js/mainVendor.min.js', array('jquery'), ASSETS_VERSION, true);

    if( is_localhost() ){
        wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/main.css', null, ASSETS_VERSION);
        wp_enqueue_script('main-scripts', get_template_directory_uri() . '/assets/js/bundle.js', array('jquery'), ASSETS_VERSION, true);
    }else{ 
        wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/css/main.min.css', null, ASSETS_VERSION);
        wp_enqueue_script('main-scripts', get_template_directory_uri() . '/assets/js/bundle.min.js', array('jquery'), ASSETS_VERSION, true);
    }


    // Localize variables
    wp_localize_script('main-scripts', 'localize', array(
        'template_directori_uri' => get_template_directory_uri(),
        'home_url' => esc_url(home_url('/')),
        'ajax_url' => admin_url('admin-ajax.php'),
        'is_front_page' => is_front_page(),
        'is_localhost' => is_localhost(),
    ));


}
add_action('wp_enqueue_scripts', 'add_scripts');