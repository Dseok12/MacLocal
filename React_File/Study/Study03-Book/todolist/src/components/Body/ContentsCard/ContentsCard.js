import React from "react";
import './ContentsCard.scss';
import ListItem from "./ListItem/ListItem";
import ContentsFooter from "./ContentsFooter/ContentsFooter";
import AddInput from "./AddInput/AddInput";

const ContentsCard = () => {

  // const madeDate = new Date()

  // const testListData = [
  //   {
  //     listTitle: '메롱',
  //     listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
  //   },
  //   {
  //     listTitle: '리스트',
  //     listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
  //   },
  //   {
  //     listTitle: '테스트',
  //     listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
  //   },
  // ]

  return (
    <div className="contents_wrap">
      <AddInput />
      <div className="contents_list_box">
        <ul className="contents_card_box">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
      <ContentsFooter />
    </div>
  )
}

export default ContentsCard;