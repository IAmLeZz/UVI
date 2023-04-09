  $(function(){
    $(window).on('scroll', function(){
      var sectionPos = $('#contact').offset().top;
      var windowHeight = $(window).height();
      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight > sectionPos) {
        $('#contact').addClass('appear');
      }
    });
  });
  
  $(function() {
    $('#big-logo').addClass('appear');
  });

  if (window.innerWidth < 800){
    document.querySelector('#buttons')?.classList.remove('px-5');
  }