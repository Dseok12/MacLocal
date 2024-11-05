import React from 'react';
import '../../css/Tab.css'; // CSS 파일 가져오기

const TabContent = ({ content }) => {
  return (
    <div className="tab-content">
      {content} {/* 선택된 탭의 내용을 보여줍니다 */}
    </div>
  );
};

export default TabContent;
