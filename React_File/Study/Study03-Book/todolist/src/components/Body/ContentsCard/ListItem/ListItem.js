import React, {useState} from "react";
import './ListItem.scss';
import SettingList from "./SettingList/SettingList";

const ListItem = ({testListData작명}) => {

  const {listTitle, listText, listMakeDate} = testListData작명;

  const [listOpen, setListOpen] = useState(false);
  
  return(
    <div className="listItem">
      <li className="list">
        <div className="user_name_box">
          <ul className="user">
            <li className="user_name">주인장</li>
            <li className="user_name">주인장주인</li>
          </ul>
          <div className="user_setting_box">
            <button className="setting_btn"
              onClick={() => {setListOpen(!listOpen)}}
            >설정</button>
            <button className="setting_label">작업자 수정</button>
            {
              listOpen === true ? <SettingList /> : null
            }
          </div>
        </div>
        <h4 className="title">{listTitle}</h4>
        <p className="text">{listText}</p>
        <div className="date">{listMakeDate}</div>
      </li>
    </div>
  )
}

export default ListItem;