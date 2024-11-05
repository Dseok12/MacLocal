import React from 'react';
import Tab from '../components/tab/Tab'; // Tab 컴포넌트 가져오기
import { TabProvider } from '../context/TabContext'; // TabProvider 가져오기

const PageOne = () => {
  const tabs = ['Home', 'Profile', 'Settings']; // 페이지에서 사용할 탭 이름들
  const contents = [<div>Home content</div>, <div>Profile content</div>, <div>Settings content</div>]; // 각 탭에 해당하는 콘텐츠

  return (
    <TabProvider
      initialTabs={tabs}
      initialContents={contents}
    >
      <Tab /> {/* Tab 컴포넌트를 사용하여 탭을 보여줍니다 */}
    </TabProvider>
  );
};

export default PageOne;
