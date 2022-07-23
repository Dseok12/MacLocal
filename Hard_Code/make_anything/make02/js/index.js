const _get = (target) => {
  return document.querySelector(target);
}


const main = () => {

  const plusBtn = _get('.plus');
  const minusBtn = _get('.minus');
  const total = _get('.total');

  plusBtn.addEventListener('click', function test01() {
    console.log('hi')
  })
  minusBtn.addEventListener('click', function test02() {
    console.log('bye')
    total.nodeValue+1
  })
}


const init = () => {
  window.addEventListener('DOMContentLoaded', main)
}
init();



