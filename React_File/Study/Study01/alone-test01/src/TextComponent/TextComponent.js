import React, { useCallback, useEffect, useState } from "react";
import './TextComponent.css';

const TextComponent = () => {
  const [test, setTest] = useState('');

  const setStorage = (text01) => {
    setTest(text01)
    window.sessionStorage.setItem('test', JSON.stringify(text01))
  }

  const [inputText, setInputText] = useState('')

  const onChangeInput = e => {
    setInputText(e.target.value)
  }

  useEffect(() => {
    window.sessionStorage.setItem('data',JSON.stringify(inputText))
  }, [inputText])

  const onKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.onChangeInput()
    }
  }

  const clearStorage = () => {
    setTest('')
    window.sessionStorage.removeItem('test')
  }
  
  return(
    <div>
      <div className="inner">
        <h1>Hi, TextComponent</h1>
        <input
          type='text'
          name='inputText'
          value={inputText}
          onChange={onChangeInput}
          onKeyPress={onKeyPress}
        />
        <button>input Add</button>
        <h2>{inputText}</h2>
        <p>{test}</p>
        <button
          type="button"
          onClick = {
            () => {
              setStorage('여기봐라~')
            }
          }
        >click!!</button>
        <button
          type="button"
          onClick = {() => {
            clearStorage()
          }}
        >
          clear!!
        </button>
      </div>
    </div>
  )
}

export default TextComponent;