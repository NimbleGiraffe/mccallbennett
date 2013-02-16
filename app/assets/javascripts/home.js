// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

  WebFontConfig = {
    google: { families: [ 'Droid+Sans::latin', 'Cinzel::latin', 'Cinzel+Decorative::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: 'slide',
        animationSpeed: 1500,
        controlsContainer: '.flexslider'
    });

    setTimeout(function() {
        $("#container").css("height", String($("#item1").offset().top+680)+"px");
    }, 1000);

});