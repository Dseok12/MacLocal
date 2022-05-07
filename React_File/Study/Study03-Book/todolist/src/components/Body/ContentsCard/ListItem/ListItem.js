import React from "react";
import './ListItem.scss';

const ListItem = () => {
  return(
    <div className="listItem">
      <li className="list">
        <div className="user_name_box">
          <ul className="user">
            <li className="user_name">주인장</li>
            <li className="user_name">주인장주인</li>
          </ul>
          <div className="user_setting_box">
            <button className="setting_btn">설정</button>
            <button className="setting_label">작업자 추가</button>
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
        </div>
        <h4 className="title">제목</h4>
        <div className="date">2022.05.05</div>
      </li>
    </div>
  )
}

export default ListItem;