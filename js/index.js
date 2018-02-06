$(document).ready(function(){
    $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    });
    $(function() {
    $('.dropdown-toggle').dropdown();
    $('.dropdown input, .dropdown label').click(function(e) {
        e.stopPropagation();
    });
    });

    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".go-top").fadeIn(200);
    } else {
        $(".go-top").fadeOut(200);
    }
    });

    // Animate the scroll to top
    $(".go-top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
    });
});      