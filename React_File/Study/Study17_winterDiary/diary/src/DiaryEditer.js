import React from 'react';
import { useState, useRef } from 'react';

const DiaryEditer = ({onCreate}) => {

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  })

  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    // console.log(state);
    if(state.author.length < 1){
      // alert("최소 1글자 이상을 입력해주세요.")
      authorInput.current.focus()
      return;
    }
    if(state.content.length < 5){
      // alert('5글자 이상 입력해주세요.');
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("성공!!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  }

  return (
    <div className='DiaryEditer'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          // value={author}
          ref={authorInput}
          value={state.author}
          type='text'
          name='author'
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          // value={content}
          ref={contentInput}
          value={state.content}
          name='content'
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditer