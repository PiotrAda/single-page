$(document).ready(function() {

  // Scrolls page to top on document refresh;
  $(this).scrollTop(0);

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    $('.hidden').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1000);
      }
    });
  });

  testExp = new RegExp('Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile' , 'i');

  // parallax;
  function parallaxFunction(){
    if (testExp.test(navigator.userAgent)){
      console.log('do nothing');
    }
    else {
      var parallax = $(".skew-image");
      window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el){
          console.log('working');
          var windowYOffset = window.pageYOffset;
          var defaultOffset = $(el).offset().top
          var backgroundPosition = "50% " + ((windowYOffset-defaultOffset+500)*0.2) + "%";
          el.style.backgroundPosition = backgroundPosition;
        });
      };
    }
  };

  parallaxFunction();

});

// smooth scrolling;
$(document).on('click', 'a', function(event){
  if(this.getAttribute("href").charAt(0) === "#") {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  }
});

var menuButtons = $('.menubuttons');

$(document).on('click', '.menubuttons', function(event){
  for (i = 0 ; i < menuButtons.length ; i++){
    $(menuButtons[i]).removeClass('active');
  }
  $(this).addClass('active');
});
