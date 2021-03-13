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
  // $('.plans').mouseenter(function() {
  //   $(this).next().show();
  // });

  //all'uscita del mouse da card hide
  $('.drop-menu-features').mouseleave(function() {
    $('.features-card').hide();
  });

  // $('.plans-card').mouseleave(function() {
  //   $(this).hide();
  // });

  $('.drop-menu').mouseleave(function() {
    $(this).children('div').hide();
  });


  // $('.plans').mouseleave(function() {
  //   if ($('.plans-card').mouseenter() || $('.plans').mouseenter()) {
  //     $('.plans-card').show();
  //   } else if($('.plans').mouseleave() && $('.plans-card').mouseleave()){
  //     $('.plans-card').hide();
  //   }
  //   // $(this).next().hide();
  // });


});
