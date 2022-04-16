$(document).ready(function(){
  $('.popup').show();
  cookiedata = document.cookie;
  if( cookiedata.indexOf('popup_1=done') < 0 ){
    // 쿠키 변경 여부 불러오기
    document.all['popup_1'].style.visibility = 'visible';
  } else {
    document.all['popup_1'].style.display = 'none';
  }
  PopupBgDisplay();
});

function PopupNoDisplay_1 () {
  // 쿠키값 변경
  setCookie('popup_1', 'done', 1)
  PopupHide();
}

function PopupHide () {
  // 팝업창 지우기
  $('#popup_1').hide()
  PopupBgDisplay()
}

function PopupBgDisplay () {
  // 팝업창이 없어진 경우 배경 지우기
  cookiedatal = document.cookie;
  if  (cookiedata.indexOf("popup_1=done") > 0) {
    $('#popupWrap').hide();
  }
}



