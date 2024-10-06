import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext'; // TabContext에서 탭 데이터 가져옴
import '../../css/Tab.css'; // CSS 파일 가져오기
import TabItem from './TabItem'; // 각각의 탭 버튼 컴포넌트

const TabList = () => {
  const { activeTab, setActiveTab, tabs } = useContext(TabContext); // 현재 선택된 탭과 탭 이름을 가져옴

  return (
    <div className="tab-list">
      {tabs.map((tab, index) => (
        <TabItem
          key={index} // 각 탭의 고유 키
          label={tab} // 탭 이름
          isActive={index === activeTab} // 현재 선택된 탭인지 확인
          onClick={() => setActiveTab(index)} // 탭 클릭 시 해당 탭으로 변경
        />
      ))}
    </div>
  );
};

export default TabList;
