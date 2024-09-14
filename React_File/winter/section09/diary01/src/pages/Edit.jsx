import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App.jsx';
import Button from '../components/Button.jsx';
import Editor from '../components/Editor.jsx';
import Header from '../components/Header.jsx';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onCLickDelete = () => {
    if (window.confirm('일기를 정말 삭제 할까요?\n다시 복구 되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정하시겠습니까?') === true) {
      onUpdate(
        input.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    } else {
      curDiaryItem;
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
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </>
  );
};

export default Edit;
