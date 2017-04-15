$(document).ready(function(){

$('#skill-fill').prop('Counter', 0);

  // display popup on hover - skills;
  $('.popup').hover(
    function() {
      var progress = $(this).attr('value') + '%';
      var counter = $(this).attr('value')
      $(this).parent().find('.desc').finish();
      $(this).parent().find('.desc').slideDown(150);
      $(this).addClass('scale');
      $('#skill-fill').stop();
      $('#skill-fill').animate({width: progress}, 500);
      $('#count').stop();
      $('#count').animate(
        { Counter: counter },
        { duration: 500, easing: 'swing',
          step: function (x) {
              $('#count').text(Math.ceil(x)+'%');
          }
        }
      );
    },
    function() {
      $(this).parent().find('.desc').finish();
      $(this).parent().find('.desc').slideUp(150);
      $(this).removeClass('scale');
      $('#skill-fill').finish();
      $('#skill-fill').animate({width: '30%'}, 500);
      $('#count').stop();
      $('#count').fadeOut( 300, function(){
        $('#count').text('Hover skills & tools').fadeIn(300)
      });
    }
  );


    // display popup on hover - projects;
  $('.project').hover(
    function() {
      $(this).parent().find('.project-description').finish();
      $(this).parent().find('.project-description').slideDown(150);
    },
    function() {
      $(this).parent().find('.project-description').finish();
      $(this).parent().find('.project-description').slideUp(150);
    }
  );
});
