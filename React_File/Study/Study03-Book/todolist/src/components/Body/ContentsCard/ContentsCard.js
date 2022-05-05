import React from "react";
import './ContentsCard.scss';
import ListItem from "./ListItem/ListItem";

const ContentsCard = () => {
  return (
    <div className="contents_wrap">
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
      <div className="contents_list_box">
        <ul className="contents_card_box">
          <ListItem />
        </ul>
      </div>
    </div>
  )
}

export default ContentsCard;