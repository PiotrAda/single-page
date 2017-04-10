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

// active button - menu;


// display popup on hover - skills;
$('.popup').hover(
  function() {
    $(this).parent().find('.desc').finish();
    $(this).parent().find('.desc').slideDown(150);
    $(this).addClass('scale');
  },
  function() {
    $(this).parent().find('.desc').finish();
    $(this).parent().find('.desc').slideUp(150);
    $(this).removeClass('scale');
  });

  // display popup on hover - projects;
  $('.project').hover(
    function() {
      $(this).parent().find('.project-description').finish();
      $(this).parent().find('.project-description').slideDown(150);
    },
    function() {
      $(this).parent().find('.project-description').finish();
      $(this).parent().find('.project-description').slideUp(150);
    });
