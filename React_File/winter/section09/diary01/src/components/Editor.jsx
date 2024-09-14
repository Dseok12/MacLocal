import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants.js';
import { getStringedDate } from '../util/get-stringed-date.js';
import Button from './Button.jsx';
import './Editor.css';
import EmotionItem from './EmotionItem.jsx';

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
      });
    }
  }, [initData]);

  const onChangInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          onChange={onChangInput}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 감정</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button
          onClick={() => {
            nav(-1);
          }}
          text={'취소하기'}
        />
        <Button
          onClick={onClickSubmitButton}
          text={'작성완료'}
          type={'POSITIVE'}
        />
      </section>
    </div>
  );
};

export default Editor;
