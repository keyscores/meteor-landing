Template.main.rendered = function() {
  this.$('#cbp-af-header').vide('desktop-keyscores');
  $('#carousel1').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    speed: 1000,
    easing: 'easeOutQuint'
  });
  $('#carousel2').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 1000,
    easing: 'easeOutQuint'
  });
};
