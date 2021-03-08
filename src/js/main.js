console.log( "Hello world! This is " + localize.wp_get_environment_type + " mode." );

if( localize.wp_get_environment_type == 'development'){
    console.log( "If theres a Violation warning below this, it is only beacause of gulp's browserSync function, it will not appear in production environment." );
}