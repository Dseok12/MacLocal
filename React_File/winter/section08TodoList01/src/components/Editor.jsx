import React from 'react';
import "./css/Editor.css";
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {

  const [content, setContent] = useState("");
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit()
    }
  }

  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  return (
    <div className='EditorWrap'>
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 Todo...'
      />
      <button
        onClick={onSubmit}
      >추가</button>
    </div>
  )
}

export default Editor