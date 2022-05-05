import React from "react";
import './Body.scss';
import ContentsCard from "./ContentsCard/ContentsCard";

const Body = () => {
  return(
    <div className="wrap body_wrap">
      <div className="inner">
        <div className="body_contents_wrap">
          <div className="body_contents_box">
            <ContentsCard />
            <ContentsCard />
            <ContentsCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;