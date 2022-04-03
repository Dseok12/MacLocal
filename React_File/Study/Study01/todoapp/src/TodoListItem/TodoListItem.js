import React from "react";
import {
  IoMdCheckboxOutline,
  IoMdCloseCircleOutline,
  IoMdCheckbox
} from "react-icons/io";
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const {id, text, checked} = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <IoMdCheckbox /> : <IoMdCheckboxOutline /> }
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <IoMdCloseCircleOutline />
      </div>
    </div>
  )
}

export default TodoListItem;