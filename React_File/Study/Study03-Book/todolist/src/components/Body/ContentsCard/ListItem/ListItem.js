import React, {useState} from "react";
import './ListItem.scss';
import SettingList from "./SettingList/SettingList";

const ListItem = () => {


  // {상위 컴포넌트로 올려야함.
  const madeDate = new Date();

  const testListData = [
    {
      listTitle: '메롱',
      listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
    },
    {
      listTitle: '리스트',
      listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
    },
    {
      listTitle: '테스트',
      listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
    },
  ]
  // 상위 컴포넌트로 올려야함.}

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
            <button className="setting_label">작업자 추가</button>
            {
              listOpen === true ? <SettingList /> : null
            }
          </div>
        </div>
        <h4 className="title">{testListData[0].listTitle}</h4>
        <div className="date">{testListData[0].listMakeDate}</div>
      </li>
    </div>
  )
}

export default ListItem;