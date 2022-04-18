import React, { useContext, useEffect, useState } from "react";
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import { 재고context } from "./App";
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
  font-size: 24px;
`;


/*
class Detail2 extends React.Component{

  // 컴포넌트가 마운트가 되었을 때 특정 코드를 실행해주세요.
  componentDidMount(){

  }

  // 컴포넌트가 사라질 때 특정 코드를 실행해주세요.
  componentWillUnmount(){

  }

}
*/






function Detail (props) {

  let [alert, alert변경] = useState(true);

  let [inputData, inputData병경] = useState('');

  let 재고 = useContext(재고context);

  useEffect(() => {
    // 기능 작성하기
    // 자주 자주 실행됨.

    let 타이머 = setTimeout(() => {
      // document.querySelector('.my-alert2').style.display = 'none';
      alert변경(false)
    }, 2000);

    // return function 어쩌구(){
    //   // detail 컴포넌트가 사라질 때 실행됨.
    // }

    return () => { clearTimeout(타이머) }

  }, [
    // 실행될 조건
    // alert
    // 조건 안에 아무것도 없으면 페이지가 로드가 되었을 때 딱 한번만 실행 된다.
  ]);

  let { id } = useParams();

  let 찾은상품 = props.shoes작명.find(function(상품){
    return 상품.id == id
  });

  let history = useHistory();
  
  return(
    <div className="container">
      <div className="row">
        <박스>
          Detail
        </박스>
        {/* { inputData }
        <input onChange={(e) => { inputData병경(e.target.value) }} /> */}
        {
          alert === true
          ? (<div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>)
          : null
        }
        
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info 재고재작명={props.재고작명}></Info>
          <button className="btn btn-danger"
            onClick={() => {
              props.재고변경작명([9, 11, 12])
            }}
          >주문하기</button> 
          <button className="btn btn-primary" onClick={() => {
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div> 
  )
}

function Info(props) {
  return(
    <p>재고: {props.재고재작명[0]}</p>
  )
}

export default Detail;