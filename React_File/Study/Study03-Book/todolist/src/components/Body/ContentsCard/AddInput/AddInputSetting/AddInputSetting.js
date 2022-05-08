import React from "react";
import './AddInputSetting.scss';

const AddInputSetting = () => {

  return(
    <div>
      <div className="add_input_setting">
          <ul>
            <li><button>이름변경</button></li>
            <li><button>수정</button></li>
            <li><button>삭제</button></li>
          </ul>
        </div>
    </div>
  )
}

export default AddInputSetting;