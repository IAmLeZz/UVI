// Make the contact section appear when reached
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
// Make the logo of "about-us" appear when reached
$(function () {
    $("#big-logo").addClass("appear");
});
// Get the nav bar buttons
var navButtons = document.querySelector("#buttons");
// Handle window resizes and removes padding in the navbar buttons when using a mobile phone
function handleWindowResize() {
    if (window.innerWidth < 800) {
        navButtons.classList.remove("px-5");
        navButtons.style.textAlign = "center";
    }
    else {
        navButtons.classList.add("px-5");
        navButtons.style.textAlign = "left";
    }
}
// Call the function once to set the initial state
handleWindowResize();
// Add event listener for the window resize event
window.addEventListener("resize", handleWindowResize);
// Make button click scroll down/up to the requested section
var scrollToAboutUs = function () {
    var div = document.querySelector('.about-us');
    div === null || div === void 0 ? void 0 : div.scrollIntoView({ behavior: 'smooth' });
};
var scrollToContact = function () {
    var div = document.querySelector('#contact');
    div === null || div === void 0 ? void 0 : div.scrollIntoView({ behavior: 'smooth' });
};
