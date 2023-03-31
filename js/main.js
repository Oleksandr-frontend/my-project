$(document).ready(function () {
    $(".burger").click(function () { 
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $("body").toggleClass("hiden")
     })
});