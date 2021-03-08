<!DOCTYPE html>
<html <?php language_attributes();?>>

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php wp_head();?>
</head>

<body <?php body_class(); ?>>

    <main id="main">

        <header>
            <nav>
                navigation
                <!-- <ul> -->
                    <?php 
                    /* 
                    wp_nav_menu([
                        'menu'            => 'header',
                        'theme_location'  => 'header',
                        'container'       => '',
                        'items_wrap'     => '%3$s',
                        'menu_id'         => false,
                        'depth'           => 1,
                        'fallback_cb'     => 'bs4navwalker::fallback',
                        'walker'          => new bs4navwalker()
                    ]); 
                    */ 
                    ?>
                <!-- </ul> -->
            </nav>
        </header>