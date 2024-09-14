import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import Header from '../components/Header.jsx';

const New = () => {
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={
          <Button
            text={'< 뒤로 가기'}
            onClick={() => {
              nav(-1);
            }}
          />
        }
      />
      <Editor />
    </div>
  );
};

export default New;
