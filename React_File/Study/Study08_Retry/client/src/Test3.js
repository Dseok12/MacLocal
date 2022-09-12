import React, { useState } from 'react';

function Test3() {
  const [Contents, setContents] = useState('');
  const [ContetnList, setContetnList] = useState([]);

  const onSubmit = () => {
    /**
     * React에서 배열을 다루는 공식
    let tempArr = [...ContetnList];
    tempArr.push(Contents);
    setContetnList([...tempArr]);
     */
    let tempArr = [...ContetnList];
    tempArr.push(Contents);
    setContetnList([...tempArr]);
    setContents('');
  };

  return (
    <div>
      {ContetnList.map((변수이름1, 인덱스) => {
        return <div key={인덱스}>{변수이름1}</div>;
      })}
      <input
        type="text"
        value={Contents}
        onChange={(e) => {
          setContents(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: '1rem' }}
      >
        제출
      </button>
    </div>
  );
}

export default Test3;
