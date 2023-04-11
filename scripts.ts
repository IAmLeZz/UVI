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
  if (window.innerWidth < 800) {
    document.querySelector("#buttons")?.classList.remove("px-5");
    document.querySelector("#buttons")?.style.textAlign = "center";
  } else {
    document.querySelector("#buttons")?.classList.add("px-5");
    document.querySelector("#buttons")?.style.textAlign = "left";
  }
}

// Call the function once to set the initial state
handleWindowResize();

// Add event listener for the window resize event
window.addEventListener("resize", handleWindowResize);


