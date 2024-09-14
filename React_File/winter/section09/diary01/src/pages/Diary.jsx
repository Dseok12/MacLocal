import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';
import Viewer from '../components/Viewer.jsx';

const Diary = () => {
  const params = useParams();

  return (
    <>
      <Header
        title={'2024기록'}
        leftChild={<Button text={'< 뒤로 가기'} />}
        rightChild={<Button text={'수정하기'} />}
      />
      <Viewer />
    </>
  );
};

export default Diary;
