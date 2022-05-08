import React from "react";
import './Body.scss';
import ContentsCard from "./ContentsCard/ContentsCard";

const Body = ({testListData작명들}) => {
  return(
    <div className="wrap body_wrap">
      <div className="inner">
        <div className="body_contents_wrap">
          <div className="body_contents_box">
            {/* {
              testListData작명들 && testListData작명들.map(testListData작명 => (
                ))
            } */}
            <ContentsCard testListData작명들={testListData작명들}/>
            <ContentsCard testListData작명들={testListData작명들}/>
            <ContentsCard testListData작명들={testListData작명들}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;