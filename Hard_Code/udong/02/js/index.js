$(document).scroll(function(){
  var scrollValue = $(document).scrollTop();

  if(scrollValue >= 55){
    $('.header').addClass('on')
  } else {
    $('.header').removeClass('on')
  }
  
})






