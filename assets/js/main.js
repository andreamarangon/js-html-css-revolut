console.log('ok');
$(document).ready(function() {
  //metto di default la card hide
  $('.features-card').hide();
  ///al passaggio del mouse show
  $('.drop-menu-features').mouseenter(function() {
    $('.features-card').show();
  });
  $('.drop-menu').mouseenter(function() {
    $(this).children('div').show();
  });

  //all'uscita del mouse da card hide
  $('.drop-menu-features').mouseleave(function() {
    $('.features-card').hide();
  });

  $('.drop-menu').mouseleave(function() {
    $(this).children('div').hide();
  });


});
