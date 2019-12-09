$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
        beforeShow: function () {
            /* Disable right click */
            $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false; 
            });
        }
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});