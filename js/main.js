$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.logo').addClass("sticky");
            $('span').css("color", "#fff");
            $('.gg').css("color", "#fff");
            $('.menubar').css("top", "25px");
            $('.menubar').css("right", "25px");
            $('.menubar').css("transition", ".5s");
            $('.fa-bars').css("color", "#000");
        } else {
            $('.logo').removeClass("sticky");
            $('.gg').css("color", "#fff");
            $('span').css("color", "sandybrown");
            $('.menubar').css("top", "40px");
            $('.menubar').css("right", "40px");
            $('.fa-bars').css("color", "#fff");
        }

    });
});
$(document).ready(function() {
    $('.fa-bars').click(function() {
        $('.navlist').show(500);
        $('.fa-bars').css("display", "none");
        $('.gg').css("z-index", "-1");
        $('.fa-times').css("display", "block");
        $('.hero').css("z-index", "-1000");
    });
});
$(document).ready(function() {
    $('.nigga').click(function() {
        $('.navlist').hide(500);
        $('.fa-bars').css("display", "block");
        $('.gg').css("zIndex", "1000");
        $('.nigga').css("display", "none");
        $('.hero').css("z-index", "1");
    });
});