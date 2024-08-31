import React from 'react'
import './css/TodoItem.css'

const TodoItem = ({
    id,
    isDone,
    content,
    date,
    onUpdate,
    onDelete,
  }) => {

  const onChangeCheckBox = () => {
    onUpdate(id)
  }
  const onClickDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <div className='TodoItemWrap'>
      <input
        onChange={onChangeCheckBox}
        readOnly
        checked={isDone}
        type='checkbox'
      />
      <div className='contents'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button
        onClick={onClickDeleteBtn}
      >삭제</button>
    </div>
  )
}

export default TodoItem