// Hides loading screen on window.load;
$(window).on('load',
  function(){
    setTimeout(function(){$('#loading-screen').fadeOut(intro)}, 1000)
  }
);

var intro = function(){
  var bar = $('.bar');
  setTimeout(function(){$(bar[0]).animate({right: '-=110vw'}, 500)}, 300)
  setTimeout(function(){$(bar[1]).animate({right: '-=110vw'}, 500)}, 300)
  setTimeout(function(){$(bar[2]).animate({right: '+=110vw'}, 500)}, 900)
  setTimeout(function(){$(bar[3]).animate({right: '+=110vw'}, 500)}, 900)
  setTimeout(function(){$(bar[4]).animate({right: '-=110vw'}, 500)}, 0)
  setTimeout(function(){$(bar[5]).animate({right: '-=110vw'}, 500)}, 0)
  setTimeout(function(){$(bar[6]).animate({right: '+=110vw'}, 500)}, 600)
  setTimeout(function(){$(bar[7]).animate({right: '+=110vw'}, 500)}, 600)
  setTimeout(function(){$(bar[8]).fadeOut(typeText)}, 1200)
};

var typeText = function(){

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

};
