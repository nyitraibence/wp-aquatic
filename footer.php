        </main>

        <footer id="footer">
            footer
        </footer>


        <?php wp_footer(); ?>

            
        <?php if( is_localhost() ){ ?>
            <script id="__bs_script__">//<![CDATA[
            document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.26.13'><\/script>".replace("HOST", location.hostname));
            //]]></script>
        <?php } ?>


    </body>

</html>