import React, {useState} from "react";

const IterationSample = () => {

  const [names, setNames] = useState([
    {id: 1, text: '합격하면'},
    {id: 2, text: '여행을 한번 갔다 올건데'},
    {id: 3, text: '어디가 좋을까?'},
    {id: 4, text: '다시 안동?'},
    {id: 5, text: '영주?'},
    {id: 6, text: '구례?'}
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(7);
  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  const onChange = e => setInputText(e.target.value)
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  }

  const handleKey = (e) => {
    if(e.key === 'Enter'){
      onClick()
    }
  }

  return(
    <>
      <input
        value={inputText}
        onChange={onChange}
        onKeyPress={handleKey}
      />
      <button
        // onClick={onClick}
      >추가</button>
      <ul>{namesList}</ul>
    </>
  )
}

export default IterationSample;