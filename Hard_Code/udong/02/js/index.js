$(document).scroll(function(){
  var scrollValue = $(document).scrollTop();

  if(scrollValue >= 55){
    $('.header').addClass('on')
  } else {
    $('.header').removeClass('on')
  }

  var scrollMainValue = $('.main').offset().top;
  console.log(scrollMainValue);

  if($(window).scrollTop() >= scrollMainValue-50){
    $('.main').css('background', 'blue')
  } else {
    $('.main').css('background', '#fff')
  }

})






