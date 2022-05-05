import React from "react";
import './Body.scss';

const Body = () => {
  return(
    <div className="wrap body_wrap">
      <div className="inner">
        <div className="contents_wrap">
          <div className="contents_box">
            <ul className="contents_card_box">
              <li>
                <input
                  placeholder="목록을 설정해주세요."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;