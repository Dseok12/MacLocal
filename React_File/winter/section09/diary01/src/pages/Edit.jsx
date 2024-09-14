import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext } from '../App.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import Header from '../components/Header.jsx';
import useDiary from '../hooks/useDiary.jsx'; // useDiary 훅을 가져옵니다

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  // useDiary 훅을 사용하여 curDiaryItem을 가져옵니다
  const curDiaryItem = useDiary({ id: params.id });

  const onCLickDelete = () => {
    if (window.confirm('일기를 정말 삭제 할까요?\n다시 복구 되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정하시겠습니까?')) {
      onUpdate(
        curDiaryItem.id, // input.id 대신 curDiaryItem.id 사용
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };

  return (
    <>
      <Header
        title={'일기 수정하기'}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로 가기'}
          />
        }
        rightChild={
          <Button onClick={onCLickDelete} text={'삭제하기'} type={'NEGATIVE'} />
        }
      />
      {curDiaryItem && ( // curDiaryItem이 존재할 때만 Editor 컴포넌트를 렌더링
        <Editor initData={curDiaryItem} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default Edit;
