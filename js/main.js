$(document).ready(function () {
    $(".burger").click(function(){
        $(".burger").toggleClass("active");
        $(".nav").toggleClass("active")
        $("body").toggleClass("hiden")
        $(".btn-up").toggleClass("clouse")
    })

    // buton up
    $(window).scroll(function(){
        if($(this).scrollTop() >= 200){
            $(".btn-up").fadeIn()
        } else{
            $(".btn-up").fadeOut()
        }
    })

    $(".btn-up").click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 800)
    })

    // scroll animate
    $("a[href^='#']").click(function(e){
        e.preventDefault();
        let element = $(this).attr("href")
        $("body,html").animate({
            scrollTop: $(element).offset().top
        }, 2000)
    })
});