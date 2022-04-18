/* eslint-disable */
import React from "react";

function Card (props) {
  return (
    <div>
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes' + (props.i작명 + 1) + '.jpg'} width="100%" alt="asdf" />
        <h4>{props.shoes작명.title}</h4>
        <p>{props.shoes작명.content}</p>
        <p>{props.shoes작명.price}원</p>
      </div>
    </div>
  )
}

export default Card;