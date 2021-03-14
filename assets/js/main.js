$(document).ready(function() {

  //metto di default la card features-card non visibile
  $('.features-card').hide();

  //al passaggio del mouse la features-card di drop-menu-features diventa visibile
  $('.drop-menu-features').mouseenter(function() {
    $('.features-card').show();
    //al passaggio del mause su card il title resta nero
    $(this).children('.title-drop-menu').children('a').css('color','rgb(25, 28, 31)');
  });

  //al passaggio del mouse la card di drop-menu diventa visibile
  $('.drop-menu').mouseenter(function() {
    $(this).children('.card').show();
    //al passaggio del mause su card il title resta nero
    $(this).children('.title-drop-menu').children('a').css('color','rgb(25, 28, 31)');
  });

  //all'uscita del mouse features-card di drop-menu-features diventa invisibile
  $('.drop-menu-features').mouseleave(function() {
    $('.features-card').hide();
    //all'uscita del mause da card il tittle torna grigio
    $(this).children('.title-drop-menu').children('a').css('color','#A3A3A3');
  });
  
  //all'uscita del mouse card di drop-menu diventa invisibile
  $('.drop-menu').mouseleave(function() {
    $(this).children('.card').hide();
    //all'uscita del mause da card il tittle torna grigio
    $(this).children('.title-drop-menu').children('a').css('color','#A3A3A3');
  });


});
