import React, {useState} from 'react';
import './global.scss';
import './reset.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = () => {

  const madeDate = new Date();

  const [testListData작명들, setTestListData작명들] = useState(
    [
      {
        listTitle: '메롱',
        listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
      },
      {
        listTitle: '리스트',
        listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
      },
      {
        listTitle: '테스트',
        listMakeDate: madeDate.getFullYear() + '년 ' + (madeDate.getMonth()+1) + '월 ' + madeDate.getDate() + '일'
      },
    ]
  )

  return (
    <div>
      <Header />
      <Body
        testListData작명들 = {testListData작명들}
      />
      <Footer />
    </div>
  );
}

export default App;
