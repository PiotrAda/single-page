$(document).ready(function() {

  // Scrolls page to top on document refresh;
  $(this).scrollTop(0);

  // Greeting text on 1'st site;
  var containerText = $('.containerText');
  var finalText = ["Hi, Im Piotr Adamus,", "welcome to my website."];
  var currentText = ['',''];

function resolve(x, y) {
  for (i = 0 ; i < finalText[x].length; i++){
    timeoutText(i, x, y);
  }
}

function timeoutText(i, x, y) {
  setTimeout(function(){
    $(containerText[x]).text(currentText[x] + finalText[x].charAt(i));
    currentText[x] = $(containerText[x]).text();
  }, 80*i+80*y);
};

  resolve(0, 0);
  resolve(1, finalText[0].length);

  /* Every time the window is scrolled ... */
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hidden').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it in */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},1000);

          }
      });
  });

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

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
