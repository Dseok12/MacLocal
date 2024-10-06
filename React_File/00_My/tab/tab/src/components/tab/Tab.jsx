// 필요한 React와 Context를 불러옵니다.
import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext'; // TabContext에서 데이터를 가져옴
import TabContent from './TabContent'; // Tab 내용 컴포넌트
import TabList from './TabList'; // Tab 버튼 리스트 컴포넌트

const Tab = () => {
  // TabContext에서 현재 선택된 탭 번호와 탭의 내용을 가져옵니다.
  const { activeTab, contents } = useContext(TabContext);

  // contents가 없을 경우 "콘텐츠가 없습니다." 메시지를 보여줍니다.
  if (!contents || contents.length === 0) {
    return <div>콘텐츠가 없습니다.</div>;
  }

  return (
    <div>
      <TabList /> {/* Tab 버튼 목록을 보여줍니다 */}
      <TabContent content={contents[activeTab]} /> {/* 선택된 탭의 내용을 보여줍니다 */}
    </div>
  );
};

export default Tab;
