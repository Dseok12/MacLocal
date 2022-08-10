const _get = (target) => {
  return document.querySelector(target)
}

const listItem = _get('.list_item');
const inputText = _get('.text_input');
const inputTextValue = inputText.value;
const Btn = _get('.btn');

const btnCall = () => {
  Btn.addEventListener('click', (e) => {
    const inputText = _get('.text_input');
    e.preventDefault();
    listItem.innerText = inputText.value;
    inputText.value = '';
    inputText.focus();
  });
}

const main = () => {
  btnCall();
}

const init = () => {
  main();
}

document.addEventListener('DOMContentLoaded',init());