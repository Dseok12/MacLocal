var st;
var st2;

$(document).ready(function(){
  
  $('.next').on('click', function(){
    clearInterval(st);
    $('.rolling_wrap ul').append($('.rolling_wrap ul li:first'))
  })

  $('.prev').on('click', function(){
    clearInterval(st);
    $('.rolling_wrap ul').prepend($('.rolling_wrap ul li:last'))
  })

  $('.pause').on('click', function(){
    $(this).css('display', 'none')
    clearInterval(st)
    $('.play').css('display', 'inline-block')
  })

  $('.play').on('click', function(){
    $(this).css('display', 'none')
    st = setInterval(auto, 1500)
    $('.pause').css('display', 'inline-block')
  })


  $('.next2').on('click', function(){
    clearInterval(st2);
    $('.rolling_wrap2 ul').append($('.rolling_wrap2 ul li:first'));
    $('.play2').css('display', 'inline-block');
    $('.pause2').css('display', 'none');
  });
  $('.prev2').on('click', function(){
    clearInterval(st2);
    $('.rolling_wrap2 ul').prepend($('.rolling_wrap2 ul li:last'));
    $('.play2').css('display', 'inline-block');
    $('.pause2').css('display', 'none');
  });
  $('.pause2').on('click', function(){
    clearInterval(st2);
    $(this).css('display', 'none')
    $('.play2').css('display', 'inline-block');
  });
  $('.play2').on('click', function(){
    st2 = setInterval(auto2, 1500);
    $(this).css('display', 'none')
    $('.pause2').css('display', 'inline-block');
  });


  st = setInterval(auto, 1500)
  st2 = setInterval(auto2, 1500)
})

function auto(){
  if($('.rolling_wrap ul').is(':animated') == false){
    $('.rolling_wrap ul').animate({
      top: '-20px'
    }, 1500, function(){
      $('.rolling_wrap ul').append($('.rolling_wrap ul li:first'));
      $('.rolling_wrap ul').css('top', '0px');
    })
  }
}

function auto2(){
  if($('.rolling_wrap2 ul').is(':animated') == false){
    $('.rolling_wrap2 ul').animate({
      top: '-30px'
    }, 1500, function(){
      $('.rolling_wrap2 ul').append($('.rolling_wrap2 ul li:first'));
      $('.rolling_wrap2 ul').css('top', '0px')
    })
  }
}





