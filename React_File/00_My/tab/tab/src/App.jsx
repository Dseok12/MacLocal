import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Tab from './components/tab/Tab'; // Tab 컴포넌트 가져오기
import { TabProvider } from './context/TabContext'; // TabProvider 가져오기
import PageOne from './pages/PageOne'; // PageOne 컴포넌트 가져오기
import PageTwo from './pages/PageTwo'; // PageTwo 컴포넌트 가져오기

const App = () => {
  // App에서 사용할 탭 이름
  const appTabs = ['프로젝트 개요', '주요 기능', '프로젝트 구조'];

  // 각 탭에 들어갈 내용을 작성
  const appContents = [
    // 첫 번째 탭 내용: 프로젝트 개요
    <div>
      <h2>리액트 탭 프로젝트에 오신 것을 환영합니다!</h2>
      <p>
        이 프로젝트는 React와 React Router를 사용하여 동적인 탭 시스템을 만드는 방법을 보여줍니다. 탭 간의 전환과 페이지 이동이 쉽고, 각 탭은 서로 다른 콘텐츠를
        가지고 있습니다.
      </p>
      <img
        src="https://via.placeholder.com/300"
        alt="프로젝트 개요"
        style={{ marginTop: '10px' }}
      />
    </div>,

    // 두 번째 탭 내용: 주요 기능
    <div>
      <h2>주요 기능</h2>
      <ul>
        <li>🌟 동적 콘텐츠를 제공하는 탭 네비게이션</li>
        <li>🌟 React Router를 통한 페이지 라우팅</li>
        <li>🌟 재사용 가능한 컴포넌트</li>
        <li>🌟 Context API로 상태 관리</li>
        <li>🌟 CSS를 활용한 깔끔한 디자인</li>
      </ul>
      <p>이 탭 네비게이션 시스템은 확장 가능하며, 탭을 쉽게 추가하거나 제거할 수 있습니다. React Router를 통해 페이지 전환도 부드럽게 처리됩니다.</p>
    </div>,

    // 세 번째 탭 내용: 프로젝트 구조 설명
    <div>
      <h2>프로젝트 구조</h2>
      <p>이 프로젝트는 유지보수와 확장성을 고려한 폴더 구조로 구성되어 있습니다:</p>
      <ul>
        <li>
          <strong>components/</strong>: Tab, TabItem, TabContent 같은 재사용 가능한 컴포넌트들이 들어 있습니다.
        </li>
        <li>
          <strong>context/</strong>: Context API를 사용하여 상태를 관리합니다.
        </li>
        <li>
          <strong>pages/</strong>: 라우팅에 사용되는 다양한 페이지 컴포넌트들이 들어 있습니다.
        </li>
        <li>
          <strong>css/</strong>: CSS 파일들이 포함되어 있어 스타일을 관리합니다.
        </li>
      </ul>
      <p>이 구조는 확장성을 높여주며, 새로운 페이지나 탭을 추가할 때도 간편하게 작업할 수 있습니다.</p>
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        React에 대해 더 알아보기
      </a>
    </div>,
  ];

  return (
    <Router>
      {/* App.js에서 TabProvider를 사용해 탭 구성 */}
      <TabProvider
        initialTabs={appTabs}
        initialContents={appContents}
      >
        <Tab /> {/* 탭을 렌더링 */}
      </TabProvider>

      {/* 페이지 이동을 위한 라우팅 설정 */}
      <Routes>
        <Route
          path="/page-one"
          element={<PageOne />}
        />{' '}
        {/* PageOne으로 이동 */}
        <Route
          path="/page-two"
          element={<PageTwo />}
        />{' '}
        {/* PageTwo으로 이동 */}
      </Routes>
    </Router>
  );
};

export default App;
