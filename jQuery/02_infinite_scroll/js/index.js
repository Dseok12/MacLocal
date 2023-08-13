$(function() {
  //코드를 작성해보세요.

  var target = $('.sc_infinity .list');
  var winTop;
  var onTop;
  var breakList = 10;
  var listCount = 0;

  $(window).scroll(function() {
    listCall()
  });

  function getList() {
    var list;
    listCount++;
    if(listCount > breakList){
      list = null;
    } else {
      list = '<li><figure><img src="./images/1.jpg"></figure></li>';
      list += '<li><figure><img src="./images/2.jpg"></figure></li>';
      list += '<li><figure><img src="./images/3.jpg"></figure></li>';
    }

    return list;
  }

  function listCall () {
    winTop = $(window).scrollTop();
    onTop = $(document).height() - $(window).height() - $('.footer').height();
    // onTop = $(document).height() - $(window).height();

    if(winTop >= onTop){
      var data = getList();
      // console.log(data)target
      if(data != null){
        target.append(data);
        console.log("callData");
      } else {
        return false;
      }
    }
  }


  function init() {
    listCall()
  }

  init();
});





