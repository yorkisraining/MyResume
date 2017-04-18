

(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            /*====================================
             EASING PLUGIN SCRIPTS 
            ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

            /*====================================
           DOWNLOAD RESUME SECTION TOOL TIP SCRIPTS 
          ======================================*/
            $(function () {
                $('a[title]').tooltip();
            });
            /*====================================
       TESTIMONIAL SECTION SCRIPTS 
       ======================================*/
            $('#testimonial-main').carousel({
                interval: 4000 //TIME IN MILLI SECONDS
            })
            /*====================================
          PRETTYPHOTO FUNCTION
          ======================================*/

            $("a.preview").prettyPhoto({
                social_tools: false
            });
            /*====================================
             WOW PLUGIN SCRIPTS 
            ======================================*/
            new WOW().init();
       	
            /*====================================
            WRITE YOUR SCRIPTS HERE
            ======================================*/
        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));

$(function () {
  $('[data-toggle="popover"]').popover()
})