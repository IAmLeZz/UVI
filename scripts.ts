// Make the contact section appear when reached
$(function () {
  $(window).on("scroll", function () {
    var sectionPos = $("#contact").offset()!.top;
    var windowHeight = $(window).height();
    var topOfWindow = $(window).scrollTop();
    if (topOfWindow! + windowHeight! > sectionPos) {
      $("#contact").addClass("appear");
    }
  });
});

// Make the logo of "about-us" appear when reached
$(function () {
  $("#big-logo").addClass("appear");
});

// Get the nav bar buttons
const navButtons = document.querySelector("#buttons") as HTMLElement;

// Handle window resizes and removes padding in the navbar buttons when using a mobile phone
function handleWindowResize() {
  if (window.innerWidth < 800) {
    navButtons.classList.remove("px-5");
    navButtons.style.textAlign = "center";
  } else {
    navButtons.classList.add("px-5");
    navButtons.style.textAlign = "left";
  }
}
 
// Call the function once to set the initial state
handleWindowResize();

// Add event listener for the window resize event
window.addEventListener("resize", handleWindowResize);

// Make button click scroll down/up to the requested section
const scrollToAboutUs = ():void =>{
  const div = document.querySelector('.about-us');
  div?.scrollIntoView({ behavior: 'smooth' });
}

const scrollToContact = ():void =>{
  const div = document.querySelector('#contact');
  div?.scrollIntoView({ behavior: 'smooth' });
}