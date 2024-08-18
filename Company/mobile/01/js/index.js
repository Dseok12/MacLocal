$(".tabBox li a").on("click", function() {
  let index = $(".tabBox li a").index(this)
  $(".tab__contents--box").removeClass('on');
  $('.tab__contents--box:eq('+ index +')').addClass('on');
})





