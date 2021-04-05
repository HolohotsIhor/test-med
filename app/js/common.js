$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_text").css("right", "0");
            $(".top_mnu").fadeOut(600);
            $(".wrapper_mnu").fadeOut(600);
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu").css("rigth", "0");
            $(".wrapper_mnu").fadeIn(600);
            $(".wrapper_mnu").css("rigth", "0");
        };
    });

    /********************** OWL carousel ***************/
    var owl = $('.carousel-one');
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

});