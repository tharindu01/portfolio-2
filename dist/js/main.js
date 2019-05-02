$(document).ready(function () {

  //toggle show/hide menu and animate menu button when menu button is clicked.
  $('#menu-btn').click(function (e) {
    e.stopPropagation();
    $('#menu-btn').toggleClass('animate');
    $('#menu').toggleClass('show-menu');
  });

  //hide menu when clicked/touched outside of menu button.
  $('body,html').click(function (e) {
    $('#menu').removeClass('show-menu');
    $('#menu-btn').removeClass('animate');
  });

  //smooth scrolling
  var scrolllink = $('.scroll');
  scrolllink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700);
  })

  //animation slide in left
  var $animation_elements = $('.slide-to-left');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_top_position <= window_bottom_position)) {
        $element.addClass('slide-into-view');
      } else {
        $element.removeClass('slide-into-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

});
