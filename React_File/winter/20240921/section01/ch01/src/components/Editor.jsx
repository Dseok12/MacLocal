import React from "react";
import "../css/components/Editor.css";

const Editor = () => {
  return (
    <div className="Editor">
      <input placeholder="새로운 투두..." />
      <button>추가</button>
    </div>
  );
};

export default Editor;
