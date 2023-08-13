$(function() {
  //코드를 작성해보세요.

  var text = $('.progress .txt');
  var progressBar = $('.progress .bar');
  // console.log(progressBar)
  $(window).scroll(function(){
    // console.log('scroll');
    getPercent();
  });

  function getPercent () {
    var scrollHeight = $('.sec01').height();
    // console.log(scrollHeight)
    var scrollRealHeight = scrollHeight - $(window).height();
    /*
    * console.log(scrollHeight, $(window).height())
    * 섹션1높이 - 화면높이 = scrollRealHeight = 스크롤거리
    * console.log(scrollRealHeight)
    */
    var winScrollTop = $(window).scrollTop();
    // console.log(winScrollTop)

    // 백분율 구하기
    var scrollPercent = (winScrollTop / scrollRealHeight) * 100;
    // console.log(scrollPercent);
    var textPercent = Math.round(scrollPercent)
    render(textPercent, scrollPercent)

  }

  function render (textPercent, scrollPercent) {
    progressBar.css({
      width : scrollPercent + '%'
    });
    text.text(textPercent + '%');

    // 맥북에서 101% 되는 오류 해결
    if(textPercent < 0){
      text.text(textPercent + '%')
    }
    if(textPercent > 100){
      text.text((textPercent - 1) + '%')
      progressBar.css({
        width : (scrollPercent - 0.9) + '%'
      });
    }
    // 맥북에서 101% 되는 오류 해결
  }

  function init() {
    getPercent();
  }
  init()
});





