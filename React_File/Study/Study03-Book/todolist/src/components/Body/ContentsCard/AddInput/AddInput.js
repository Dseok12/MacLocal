import React from "react";
import './AddInput.scss';

const AddInput = () => {
  return(
    <div>
      <div className="contents_add_box">
        <div className="add_input">
          <input
            placeholder="할일을 입력하세요."
          />
        </div>
        <div className="btns">
          <button className="add_btn">추가</button>
          <button>설정</button>
        </div>
      </div>
    </div>
  )
}

export default AddInput;