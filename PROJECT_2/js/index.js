function init(){
  getHeader();
  parallax();
}
function parallax (){
  $(function() {
    $('header').hide().fadeOut().slideDown(1000); 
      window.addEventListener("scroll", function(event){
        var top = this.scrollY;
        var layers = $(".parallax__layer");
        var speed, yPos;
        layers.each(function() {
          speed = $(this).attr('data-speed');
          var yPos = -(top * speed / 100);
          $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
        });
      });
  });
}

init();

