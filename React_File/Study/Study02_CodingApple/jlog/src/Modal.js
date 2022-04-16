import React from "react";

function Modal(프롭스) {
  return(
    <div>
      <div className='modal'>
        <h2>{ 프롭스.글제목작명[프롭스.누른제목작명] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
  )
}

export default Modal;