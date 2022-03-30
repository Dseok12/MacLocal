import React, { useState } from 'react';

const Say = () => {
  const [ message, setMessage ] = useState('')
  const onClickEnter = () => setMessage('Hi!')
  const onClickLeave = () => setMessage('Bye!')

  const [ color, setColor ] = useState('black')

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{color: 'green'}}
        onClick={() => setColor('green')}
      >초록색</button>
      <button
        style={{color: 'blue'}}
        onClick={() => setColor('blue')}
      >파란색</button>
    </div>
  )
}

export default Say;