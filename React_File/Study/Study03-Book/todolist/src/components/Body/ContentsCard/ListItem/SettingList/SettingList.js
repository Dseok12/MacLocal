import React from "react";
import './SettingList.scss';

const SettingList = () => {
  return(
    <div>
      <div className="setting_list">
        <ul>
          <li>
            <button>완료</button>
          </li>
          <li>
            <button>수정</button>
          </li>
          <li>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SettingList;