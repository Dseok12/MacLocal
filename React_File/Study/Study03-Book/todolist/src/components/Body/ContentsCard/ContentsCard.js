import React from "react";
import './ContentsCard.scss';
import ListItem from "./ListItem/ListItem";
import ContentsFooter from "./ContentsFooter/ContentsFooter";
import AddInput from "./AddInput/AddInput";

const ContentsCard = ({testListData작명들}) => {

  // console.log(testListData작명들)

  return (
    <div className="contents_wrap">
      <AddInput />
      <div className="contents_list_box">
        <ul className="contents_card_box">
          {testListData작명들 && testListData작명들.map(testListData작명 => (
            <ListItem testListData작명={testListData작명} key={testListData작명.id} />
          ))}
        </ul>
      </div>
      <ContentsFooter />
    </div>
  )
}

export default ContentsCard;