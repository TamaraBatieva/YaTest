var intervalId;
var timeoutId;

$(document).ready(function () {
    setupNavigation();
    startAutoPlay();
});

$(document).on("click", ".slider .nav span", function () {
    stopAutoPlay();
    var slideIndex = parseInt($(this).attr("rel")); // узнаем номер
    goToSlide(slideIndex); // слайдим
    timeoutId = setTimeout(startAutoPlay, 5000);
    return false;
});

function setupNavigation() {
    var slider = $(".slider");
    $(slider).append("<div class='nav'></div>");
    var nav = $(slider).find(".nav");
    $(slider).find("li").each(function () {
        var liIndex = $(this).index();
        $(nav).append("<span rel='" + liIndex + "'></span>"); // добавляем блок навигации
        $(this).addClass("slider" + liIndex);
    });
	
    $(slider).find("span").first().addClass("on"); // делаем активным первый элемент меню
}

function startAutoPlay() {
    intervalId = setInterval(goNextSlide, 3000);
}

function stopAutoPlay() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
}

function getActiveSlideIndex() {
    return parseInt($(".on").attr("rel"));
}

function goNextSlide() {
    var nextSlideIndex = getActiveSlideIndex() + 1;
    goToSlide(nextSlideIndex);
}

function goToSlide(slideIndex) {
    var slider =  $(".slider");

    if (slideIndex >= $(slider).find("li").length) {
        slideIndex = 0;
    }

    $(".on").removeClass("on");
    $("span[rel=" + slideIndex + "]").addClass("on");

    var ul = $(slider).find("ul");
    var slide = $(slider).find("li").first();
    var step = $(slide).width();
    $(ul).animate({marginLeft: "-" + step * slideIndex}, 500);
}