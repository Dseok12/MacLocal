import React, { useState } from "react";
import './TextComponent.css';

const TextComponent = () => {
  const [test, setTest] = useState('');
  const setStorage = () => {
    window.localStorage.setItem('test', JSON.stringify(setTest('여기봐라~')))
  }
  return(
    <div>
      <div className="inner">
        <h1>Hi, TextComponent</h1>
        <p>{test}</p>
        <button
          type="button"
          onClick = {
            () => {
              setStorage()
            }
          }
        >click!!</button>
      </div>
    </div>
  )
}

export default TextComponent;