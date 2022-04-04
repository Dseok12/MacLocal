$(document).ready(function(){


  $('.side_utill_toggle_btn').on('click', function(){
    $('.utill_list').stop().toggle();

    if($('.utill_list').css('display') == 'none'){
      $('.side_utill_toggle_btn span').text('열기')
    } else {
      $('.side_utill_toggle_btn span').text('접기')
    };

  })



});





