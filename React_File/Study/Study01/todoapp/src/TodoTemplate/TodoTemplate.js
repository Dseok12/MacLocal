import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return(
    <div className="TodoTemplate">
      <div className="app_title">일정관리</div>
      <div className="content">{ children }</div>
    </div>
  )
}

export default TodoTemplate;