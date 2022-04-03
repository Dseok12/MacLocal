import React, { useState, useCallback } from "react";
import {
  IoIosAddCircle
} from "react-icons/io";
import './TodoInsert.scss';


const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, []);

const onSubmit = useCallback(
  e => {
    onInsert(value)
    setValue('') // value값 초기화
    e.preventDefault();
  },
  [onInsert, value],
)

  return(
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <IoIosAddCircle />
      </button>
    </form>
  )
}

export default TodoInsert;