$(document).ready(function(){
    $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $("#content").toggleClass("active");
    });
    $(function() {
    $('.dropdown-toggle').dropdown();
    $('.dropdown input, .dropdown label').click(function(e) {
        e.stopPropagation();
    });
    });
//boton subir
    $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $(".go-top").fadeIn(200);
    } else {
        $(".go-top").fadeOut(200);
    }
    });
    $(".go-top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
    });
});      