$(document).ready(function() {

  

  $('.tab01_list li').click(function(){
    /*
    // 일반 탭 메뉴
    var idx = $(this).index();
    $('.tab01_list li').removeClass('on');
    $('.tab01_list li').eq(idx).addClass('on');

    $('.tab01_item > li').hide();
    $('.tab01_item > li').eq(idx).show();
    */
  });

  // 랜덤 탭 메뉴
  var count = $('.tab01_list li').length; // 탭이 몇개인지 계산
  idx = Math.floor(Math.random() * count); // 랜덤숫자 출력
  changeTab(idx);// 탭교체

  $('.tab01_list li').click(function(){
    idx = $(this).index();
    changeTab(idx);
  });

  function changeTab() {
    $('.tab01_list li').removeClass('on'); // 선택표시를 제거
    $('.tab01_list li').eq(idx).addClass('on'); // 새로운 탭에 선택표시 추가
    $('.tab01_item > li').hide(); // 기존 탭내용 제거
    $('.tab01_item > li').eq(idx).show(); // 새로운 탭 내용 보이기
  }

});





