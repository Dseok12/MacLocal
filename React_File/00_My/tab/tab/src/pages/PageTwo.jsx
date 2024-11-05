import React from 'react';
import Tab from '../components/tab/Tab';
import { TabProvider } from '../context/TabContext';

const PageTwo = () => {
  const tabs = ['Overview', 'Details', 'Contact'];
  const contents = [<div>Overview content</div>, <div>Details content</div>, <div>Contact content</div>];

  return (
    <TabProvider
      initialTabs={tabs}
      initialContents={contents}
    >
      <Tab />
    </TabProvider>
  );
};

export default PageTwo;
