## WP part:


Plugins:
- Velvet Blues Update URLs
- Classic Editor
- ACF

Post-deployment plugins:
- W3 Total Cache
- Yoast SEO
- Wordfence




After install: 
- Set theme info in `style.css`
- Set a 880x660 sized image named screenshot.png in the theme root - this will serve as the theme's cover
- In the WP admin, select this as the active theme
run `npm i` in the template rood directory to install development packages for the gulp workflow
- Insert `define( 'WP_ENVIRONMENT_TYPE', 'development' );` to the wp-config.php file in the *WP root*. Place it after the DEBUG_MODE global, for example. 
