$(function () {
    $(window).on("scroll", function () {
        var sectionPos = $("#contact").offset().top;
        var windowHeight = $(window).height();
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight > sectionPos) {
            $("#contact").addClass("appear");
        }
    });
});
$(function () {
    $("#big-logo").addClass("appear");
});
function handleWindowResize() {
    var _a, _b, _c, _d;
    if (window.innerWidth < 800) {
        (_a = document.querySelector("#buttons")) === null || _a === void 0 ? void 0 : _a.classList.remove("px-5");
        (_b = document.querySelector("#buttons")) === null || _b === void 0 ? void 0 : _b.style.textAlign = "center";
    }
    else {
        (_c = document.querySelector("#buttons")) === null || _c === void 0 ? void 0 : _c.classList.add("px-5");
        (_d = document.querySelector("#buttons")) === null || _d === void 0 ? void 0 : _d.style.textAlign = "left";
    }
}
// Call the function once to set the initial state
handleWindowResize();
// Add event listener for the window resize event
window.addEventListener("resize", handleWindowResize);
