<?php

function postFieldEmpty($post_field){
    if(!isset($post_field) || empty($post_field) || $post_field==""){
        return true;
    }
    return false;
}