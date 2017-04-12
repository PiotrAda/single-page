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

  // parallax;
  function parallaxFunction(){
    var parallax = $(".effect2");
    window.onscroll = function(){
      [].slice.call(parallax).forEach(function(el){
        var windowYOffset = window.pageYOffset;
        var defaultOffset = $(el).offset().top
        var backgroundPosition = "50% " + ((windowYOffset-defaultOffset+500)*0.2) + "%";
        el.style.backgroundPosition = backgroundPosition;
      });
    };
  };
  parallaxFunction();
});

// smooth scrolling;
$(document).on('click', 'a', function(event){
  if(this.getAttribute("href").charAt(0) === "#") {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
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
