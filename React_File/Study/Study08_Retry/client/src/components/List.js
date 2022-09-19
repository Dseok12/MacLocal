import React, { useState } from 'react';

function List(props) {
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

  return (
    <>
      {props.ContetnList.map((변수이름1, 인덱스) => {
        return <div key={인덱스}>내용: {변수이름1}</div>;
      })}
    </>
  );
}

export default List;
