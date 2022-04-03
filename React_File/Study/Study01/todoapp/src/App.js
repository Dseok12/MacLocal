import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./TodoTemplate/TodoTemplate";
import TodoInsert from "./TodoInsert/TodoInsert";
import TodoList from "./TodoList/TodoList";

const App = () => {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '이거 로컬스토리지로 넣어보자',
      checked: true
    },
    {
      id: 3,
      text: '로컬스토리지로 어떻게 넣지?',
      checked: false
    }
  ]);

  const saveData = () => {
    const listObj = [
      {
        id: 1,
        text: '리액트의 기초 알아보기',
        checked: true
      },
      {
        id: 2,
        text: '이거 로컬스토리지로 넣어보자',
        checked: true
      },
      {
        id: 3,
        text: '로컬스토리지로 어떻게 넣지?',
        checked: false
      }
    ]

    window.localStorage.setItem('setTodos', JSON.stringify(listObj))
  }

  const nextId = useRef(4);

  // 할 일 목록 추가
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  )

  // 할 일 리스트 지우기
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
      window.localStorage.removeItem()
    },
    [todos],
  )

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      );
    },
    [todos]
  )


  return (
    <div>
      <TodoTemplate>
        <TodoInsert
          onInsert={onInsert}
          saveData={saveData}
        ></TodoInsert>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
