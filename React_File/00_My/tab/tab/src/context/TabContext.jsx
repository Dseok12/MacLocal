// React와 useState, createContext를 불러옵니다.
import React, { createContext, useState } from 'react';

// TabContext를 만들고, 다른 파일에서 쓸 수 있게 export 해줍니다.
export const TabContext = createContext();

// TabProvider는 탭 데이터를 저장하고, 자식 컴포넌트에 전달합니다.
export const TabProvider = ({ children, initialTabs = [], initialContents = [] }) => {
  // 선택된 탭의 번호를 저장할 상태값
  const [activeTab, setActiveTab] = useState(0);

  return (
    // Provider를 통해 탭의 이름과 내용을 자식 컴포넌트들에게 전달
    <TabContext.Provider value={{ activeTab, setActiveTab, tabs: initialTabs, contents: initialContents }}>
      {children} {/* 자식 컴포넌트가 들어갈 자리 */}
    </TabContext.Provider>
  );
};
