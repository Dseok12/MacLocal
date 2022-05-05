import React from "react";
import './ListItem.scss';

const ListItem = () => {
  return(
    <div className="listItem">
      <li className="list">
        <div className="user_name_box">
          <ul className="user">
            <li className="user_name">주인장</li>
          </ul>
          <div className="user_setting_box">
            <button>설정</button>
          </div>
        </div>
        <h4 className="title">제목</h4>
        <div className="date">2022.05.05</div>
      </li>
    </div>
  )
}

export default ListItem;