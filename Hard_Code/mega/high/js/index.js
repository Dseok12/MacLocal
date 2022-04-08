var st;
var st1;
var st2;
var st3;

$(document).ready(function(){


  $('.side_utill_toggle_btn').on('click', function(){
    $('.utill_list').stop().toggle();

    if($('.utill_list').css('display') == 'none'){
      $('.side_utill_toggle_btn span').text('열기')
    } else {
      $('.side_utill_toggle_btn span').text('접기')
    };

  });

  // header_mid_slide_left 시작
  $('.up_btn_real').on('click', function() {
    $('.up_slide ul').append($('.up_slide > ul > li:first'))
  })
  $('.down_btn_real').on('click', function() {
    $('.up_slide ul').append($('.up_slide > ul > li:last'))
  });
  st = setInterval(auto, 1800)
  // header_mid_slide_left 끝

  // header_mid_slide_right 시작
  $('.next_btn').on('click', function() {
    $('.right_banner_wrap > ul').append($('.right_banner_wrap > ul > li:first'))
  })
  $('.prev_btn').on('click', function() {
    $('.right_banner_wrap > ul').append($('.right_banner_wrap > ul > li:last'))
  });
  st1 = setInterval(auto2, 2000)
  // header_mid_slide_right 끝

  st2 = setInterval(auto3, 1500)
  st3 = setInterval(auto4, 1800)


});

function auto(){
  if($('.up_slide ul').is(':animated') == false){
    $('.up_slide ul').animate({
      top: -'50px',
      transition: 'top 0.5s'
    }, 1000, function(){
      $('.up_slide ul').append($('.up_slide ul li:first'))
      $('.up_slide ul').css('top', '0px')
    })
  }
}
function auto2(){
  if($('.right_banner_box').is(':animated') == false){
    $('.right_banner_box').animate({
      left: '-200px',
      transition: 'left 0.5s'
    }, 1000, function(){
      $('.right_banner_box').append($('.right_banner_box li:first'))
      $('.right_banner_box').css('left', '-200px')
    })
  }
}
function auto3(){
  if($('.sticker_box').is(':animated') == false){
    $('.sticker_box').animate({
      left: '-101px',
      transition: 'left 0.5s'
    }, 1000, function(){
      $('.sticker_box').append($('.sticker_box li:first'))
      $('.sticker_box').css('left', '-101px')
    })
  }
}
function auto4(){
  if($('.main_menu_up_slide_box').is(':animated') == false){
    $('.main_menu_up_slide_box').animate({
      left: '-101px',
      transition: 'left 0.5s'
    }, 1000, function(){
      $('.main_menu_up_slide_box').append($('.main_menu_up_slide_box li:first'))
      $('.main_menu_up_slide_box').css('left', '-101px')
    })
  }
}




