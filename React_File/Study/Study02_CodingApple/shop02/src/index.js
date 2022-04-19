import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { combineReducers } from 'redux';


let alert초기값 = true;

function reducer2(state = alert초기값, 액션){
  if(액션.type === '닫기'){
    state = false;
    return state;
  } else {
    return state;
  }
}




// redux에서의 state 만드는 법
// 변수호 초기값 만들고 reducer 안에 넣음.
let 초기값 = [
  {id: 0, name: '맥북 M1', quan: 2},
  {id: 1, name: '아이패드 프로 5세대', quan: 2},
]

// reducer는 데이터가 어떻게 변할지 미리 정해놓고 사용하는 것이다.
function reducer(state = 초기값, 액션){

  if(액션.type === '항목추가'){

    let found = state.findIndex((a) => { return a.id === 액션.payload.id });

    if(found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    }


  } else if(액션.type === '수량증가'){

    

    let copy = [...state];
    copy[액션.payload].quan++;
    return copy;

  } else if(액션.type === '수량감소') {

    let copy = [...state];
    copy[액션.payload].quan--;
    return copy;

  } else {
    return state
  }
}

let store = createStore(combineReducers({
  reducer,
  reducer2
}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); 