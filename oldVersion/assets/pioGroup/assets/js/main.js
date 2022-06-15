$( document ).ready(function() {
    $(".anchor_link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            top = top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});