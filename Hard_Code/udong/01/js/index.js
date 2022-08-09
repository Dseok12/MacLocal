const _get = (target) => {
  return document.querySelector(target)
}

const listItem = _get('.list_item')
const inputText = _get('.text_input');
const inputTextValue = inputText.value;
const Btn = _get('.btn');


const btnCall = () => {
  Btn.addEventListener('click', (e) => {
    e.preventDefault();
    // 여기에 localStroage로 보낼 기능 구현
    if(inputTextValue == ''){
      alert('리스트를 입력하세요!')
    } else {
      // 여기에 localStroage로 보낼 기능 구현
      localStorage.getItem(inputTextValue)
    }
  })
}

const main = () => {
  btnCall();
}

const init = () => {
  main();
}

document.addEventListener('DOMContentLoaded',init());


