var _a;
$(function () {
    $(window).on('scroll', function () {
        var sectionPos = $('#contact').offset().top;
        var windowHeight = $(window).height();
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight > sectionPos) {
            $('#contact').addClass('appear');
        }
    });
});
$(function () {
    $('#big-logo').addClass('appear');
});

if (window.innerWidth < 800) {
    (_a = document.querySelector('#buttons')) === null || _a === void 0 ? void 0 : _a.classList.remove('px-5');
}
