import React, {useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('')

  const handleTextArea = (e) => {
    setText(e.target.value);
  }

  
  const handleButton = (e) => {
    e.preventDefault();
    
    if(text.length <= 10 || text.length >= 500){
      alert('글자 오바')
    } else {
      alert('ok')
    }
  }

  return (
    <div className="App">
      <textarea
        placeholder='댓글을 입력해주세요'
        rows={20}
        cols={30}
        onChange={handleTextArea}
      />
      <button
        type='submit'
        disabled={!text}
        onClick={handleButton}
      >보내기</button>
    </div>
  );
}

export default App;
