
$('.item-box-link').mouseover(function () {
    $(this).children(".item-box-text").css("transition", "0.4s");
    $(this).children(".item-box-text").css("font-size", "1.02em");
    $(this).children(".item-box-text").css("margin-right", "0px");
    $(this).children(".inline-text").css("margin-right", "-1.5px");
    $(this).children(".big-word").css("margin-right", "-4px");
    var color = $(this).children('.inline-text').css("color");
    $('.intro-section').css("background-color", color);
    $('.intro-section').css("transition", "0.4s");


    $(this).children(".item-box-text").css("text-shadow", "0.125em 0.25em 0.5em rgba(0,0,0,0.2");
    $(this).children(".item-box-background").css("tansitions", "0.3s");
    $(this).children(".item-box-background").css("opacity", "1");
    $(this).children("span.item-box-text.frank").css("color", "#750096");
        $(this).children("span.item-box-text.fastech-project").css("color", "#223547");
    $(this).children("span.item-box-text.raceme").css("color", "#3182BD");

});

$('.item-box-link').mouseout(function () {
    $(this).children(".item-box-text").css("transition", "0.4s");
    $(this).children(".item-box-text").css("font-size", "1em");
    $(this).children(".inline-text").css("margin-right", "0px");
    $('.intro-section').css("background-color", "white");
    $('.intro-section').css("transition", "0.4s");
    $(this).children(".item-box-text").css("text-shadow", "none");
    $(this).children(".item-box-background").css("tansitions", "0.3s");
    $(this).children(".item-box-background").css("opacity", "0");
        $(this).children("span.item-box-text.fastech-project").css("color", "white");
    $(this).children("span.item-box-text.frank").css("color", "white");
    $(this).children("span.item-box-text.raceme").css("color", "white");
});

// $('.inline-text').mouseover(function () {
//     var color = $(this).css("color");
//     $('.intro-section').css("background-color", color);
// });

$('.inline-text').mouseout(function () {
    $('.intro-section').css("background-color", "white");
});


var pS = $(".project-section").offset().top;
var iS = $(".intro-section").offset().top;
var hW = $(window).height();
console.log($(".scroll-button").offset().top);
sT = $(".scroll-button").offset().top;
var pS_new = pS - (hW/2);
var iS_new = iS - (hW/3);
$(window).scroll(function() {
    wS = $(this).scrollTop();
    if (wS > (sT/6)) {
        $(".scroll-button").fadeOut();
    }
    else {
        $(".scroll-button").fadeIn();
    }

    if (wS <  iS_new) {
        $(".parallax").html("")
    }
    if (wS >  iS_new) {
        $(".parallax").html("ABOUT")
    }
    if (wS > pS_new) {
        $(".parallax").html("PROJECTS")
    }
    // else {
    //     $(".parallax").html("ABOUT")
    // }
});
