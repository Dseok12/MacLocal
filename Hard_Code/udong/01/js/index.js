const _get = (target) => {
  return document.querySelector(target)
}


const listItem = _get('.list_item');
const inputText = _get('.text_input');
const inputTextValue = inputText.value;
const Btn = _get('.btn');

const btnCall = () => {
  Btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputText = _get('.text_input');
    const listUl = _get('.list_box');
    // listUl.createElement('li');
    listUl.innerHTML = `
    <li class="list_item">${inputText.value}</li>
    `
    // listItem.innerText = inputText.value;
    if(inputText.value == ''){
      alert('항목을 입력하세요.');
    } else {
      inputText.value = '';
      inputText.focus();
    }
  });
}

const main = () => {
  btnCall();
}

const init = () => {
  main();
}

document.addEventListener('DOMContentLoaded',init());