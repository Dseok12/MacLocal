import React, { useRef, useState } from "react";
import "../css/components/Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      alert("List를 입력해주세요");
      contentRef.current.focus();
      return;
    } else {
      alert("List가 잘 들어갔습니다.");
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="새로운 투두..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
