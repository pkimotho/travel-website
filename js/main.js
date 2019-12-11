const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    425: {
        items: 2
    },
    768: {
        items: 3
    }
}
$(document).ready(function() {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    });

    // owl carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
    // scroll to top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    // AOS Instance
    AOS.init();
});