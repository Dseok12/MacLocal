import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../App.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import Header from '../components/Header.jsx';

const New = () => {
  // DiaryDispatchContext에서 onCreate를 포함한 객체를 구조 분해 할당으로 가져옴
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true }); // 일기 작성 후 홈으로 이동
  };

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
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
