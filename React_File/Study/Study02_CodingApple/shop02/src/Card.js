/* eslint-disable */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Test from "./Test";

function Card (props) {

  let history = useHistory()

  return (
    <div className="col-md-4" onClick={() => { history.push('/detail/' + props.shoes작명.id) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i작명 + 1) + '.jpg'} width="100%" alt="asdf" />
      <h4>{props.shoes작명.title}</h4>
      <p>{props.shoes작명.content}</p>
      <p>{props.shoes작명.price}원</p>
      <Test></Test>
    </div>
  )
}



export default Card;