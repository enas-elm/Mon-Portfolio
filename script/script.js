// Click on logo, display text
$('.toggle').click(function() {
    $(this).next('.div_appear').slideToggle('slow');
});



// Scroll to appear
function reveal(item, wrapper) {
  var verticalEdge   = wrapper.scrollTop() + wrapper.outerHeight(),
      horizontalEdge = wrapper.scrollLeft() + wrapper.outerWidth();
  
  item.each(function() {
    if ((verticalEdge >= $(this).offset().top) &&
        (horizontalEdge >= $(this).offset().left)) {
          $(this).addClass('animate');
        }
  });
}
  
$(window).on("load scroll", function() {
  reveal($('.reveal'), $(this));
});

$(window).on("load scroll", function() {
  reveal($('.reveal_left'), $(this));
});

$(window).on("load scroll", function() {
  reveal($('.reveal_right'), $(this));
});




// Change nav color on different div
var change_colorOffset = $("#change_color").offset();
var $contentDivs = $(".content");
$(document).scroll(function() {
    $contentDivs.each(function(k) {
        var _thisOffset = $(this).offset();
        var _actPosition = _thisOffset.top - $(window).scrollTop();
        if (_actPosition < change_colorOffset.top && _actPosition + $(this).height() > 0) {
            $("#change_color").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
            return false;
        }
    });
});