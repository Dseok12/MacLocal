import React from 'react';
import '../../css/Tab.css'; // CSS 파일 가져오기

const TabItem = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`tab-item ${isActive ? 'active' : ''}`} // 선택된 탭이면 active 클래스를 적용
      onClick={onClick} // 탭 클릭 시 동작
    >
      {label} {/* 탭의 이름 */}
    </div>
  );
};

export default TabItem;
