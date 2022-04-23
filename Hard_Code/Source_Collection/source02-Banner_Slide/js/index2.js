var st;
var st2;

$(document).ready(function(){


  st = setInterval(auto, 1500)
});

function auto(){
  if($('.rolling_box ul').is(':animated') == false){
    $('.rolling_box ul').animate({
      left: '-100px'
    }, 1500, function(){
      $('.rolling_box ul').append($('.rolling_box ul li:first'));
      $('.rolling_box ul').css('left', '0px');
    })
  }
}


