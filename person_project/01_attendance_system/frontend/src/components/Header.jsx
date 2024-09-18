import "../css/component/Header.css";
import { useState } from "react";

const Header = () => {

  const [isAction, setIsAction] = useState(false);

  const onClickEvtAction = () => {
    setIsAction(!isAction);
  }

  return (
    <div className="header_wrap">
      <div className="header_inner">
        <div className="menuBox">
          <div
            className={isAction ? 'menuBtn on' : 'menuBtn'}
            onClick={onClickEvtAction}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isAction ? 'menuList on' : 'menuList'}>
            <div className="nav_inner">
              <ul>
                <li><a href="#">회원가입</a></li>
                <li><a href="#">로그인</a></li>
                <li><a href="#">마이페이지</a></li>
              </ul>
              <div
                className={isAction ? 'menuBtn on' : 'menuBtn'}
                onClick={onClickEvtAction}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
        <h1>로고</h1>
      </div>
    </div>
  )
}

export default Header