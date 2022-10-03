$(document).ready(function () {
  $('.tab_box p').click(function () {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('.content_box p').removeClass('on');
    $('#' + $(this).attr('data-alt')).addClass('on');
  });
});
