<?php

function is_localhost() {
    $whitelist = array( '127.0.0.1', '::1' );
    
    if ( in_array( $_SERVER['REMOTE_ADDR'], $whitelist ) ) {
        return true;
    }
}

function postFieldEmpty($post_field){
    if(!isset($post_field) || empty($post_field) || $post_field==""){
        return true;
    }
    return false;
}