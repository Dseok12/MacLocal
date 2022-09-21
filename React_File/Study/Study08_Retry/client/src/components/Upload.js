import React, { useState, useEffect } from 'react';

function Upload(props) {
  const [Contents, setContents] = useState('');

  const onSubmit = () => {
    /**
     * React에서 배열을 다루는 공식
    let tempArr = [...ContetnList];
    tempArr.push(Contents);
    setContetnList([...tempArr]);
     */
    let tempArr = [...props.ContetnList];
    tempArr.push(Contents);
    props.setContetnList([...tempArr]);
    props.setContents('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  // useEffect(() => {
  //   // 해당 컴포넌트가 나타날 때 실행
  //   // 여기서는 Upload컴포넌트가 나타날 때 실행
  //   alert('upload컴포넌트가 나타났습니다.');

  //   return () => {
  //     // 해당 컴포넌트가 죽었을 때 실행
  //     // 여기서는 Upload컴포넌트가 죽었을 때 실행
  //   };
  // }, []);

  return (
    <>
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
        onKeyDown={onKeyPress}
      >
        제출
      </button>
    </>
  );
}

export default Upload;
