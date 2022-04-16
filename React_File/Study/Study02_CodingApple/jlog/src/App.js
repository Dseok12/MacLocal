/* eslint-disable */
import React, {useState} from 'react';
import Modal from './Modal';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '중랑 막창 맛집']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal번경] = useState(false);

  let [누른제목, 누른제목변경] = useState(0)

  function 반복된UI(){
    var 어레이 = [];
    for(var i = 0; i < 3; i++){
      어레이.push(<div>안녕</div>)
    }
    return 어레이;
  }

  function 제목바꾸기 () {
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      {/* <div className="list">
        <h3>{ 글제목[0] }<span onClick={ () => {따봉변경(따봉+1)} }>😍</span> {따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> */}

      {반복된UI()}

      {
        글제목.map(function(글, i){
          return (
            <div className="list">
              <h3 onClick={ () => {누른제목변경(i)} }>{ 글 }<span onClick={ () => {따봉변경(따봉+1)} }> 😍</span> {따봉}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <button onClick={ () => {누른제목변경(0)} }>버튼1</button>
      <button onClick={ () => {누른제목변경(1)} }>버튼2</button>
      <button onClick={ () => {누른제목변경(2)} }>버튼3</button>

      <button onClick={ () => { modal번경(!modal) } }>모달 여닫기</button>

      {
        modal === true
        ? <Modal 글제목작명={글제목} 누른제목작명={누른제목}></Modal>
        : null
      }

    </div>
  );
}

export default App;
