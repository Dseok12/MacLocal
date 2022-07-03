import React, { useState } from "react";
import './AddInput.scss';
import AddInputSetting from "./AddInputSetting/AddInputSetting";

const AddInput = () => {

  const [InputSetting, setInputSetting] = useState(false);

  const toggleSetIntputSetting = () => {
    setInputSetting(!InputSetting)
    // 구현 하고 싶은 기능
    // true일 때 컴포넌트 보이고
    // 그 버튼과 다른 곳을 클릭하면 false가 되야한다.
  }

  return(
    <div>
      <div className="contents_add_box">
        <div className="add_input_box">
          <form className="add_input_form">
            <div className="add_input">
              <label htmlFor="doWrok">할일을 입력하세요.</label>
              <input
                id="doWrok"
                placeholder="할일을 입력하세요."
              />
            </div>
            <div className="submit_btn_box">
              <button
                type="submit"
                className="add_btn"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >추가</button>
            </div>
          </form>
        </div>
        <div className="add_input_btns">
          <div className="add_input_setting_box">
            <button
              onClick={() => { toggleSetIntputSetting() }}
            >설정</button>
            {
              InputSetting === true ? <AddInputSetting /> : null
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInput;