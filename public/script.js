$(function() {
    console.log( "ready!" );

    $('.fa-bars').click(function(){
      // console.log('clicked nav!');
      $(".mobile-nav").animate({left:0});
    });
    $('.fa-window-close-o').click(function(){
      // console.log('clicked close!');
      $(".mobile-nav").animate({left:-220});
    });

});
