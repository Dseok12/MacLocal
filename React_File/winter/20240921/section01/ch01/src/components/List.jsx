import React from "react";
import "../css/components/List.css";
import TodoItem from "./TodoItem.jsx";

const List = () => {
  return (
    <div className="List">
      <h4>Todo List</h4>
      <input placeholder="검색어를 입력하세요" />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default List;
