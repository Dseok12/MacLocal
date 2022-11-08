import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List(props) {
  const [Text, setText] = useState('');
  useEffect(() => {
    let body = {
      text: 'hellow',
    };
    axios
      .post('/api/test',body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [Contents, setContents] = useState('');

  // const onSubmit = () => {
  //   /**
  //     React에서 배열을 다루는 공식
  //     let tempArr = [...ContetnList];
  //     tempArr.push(Contents);
  //     setContetnList([...tempArr]);
  //    */
  //   let tempArr = [...props.ContetnList];
  //   tempArr.push(Contents);
  //   props.setContetnList([...tempArr]);
  //   props.setContents('');
  // };

  return (
    <>
      {props.ContetnList.map((변수이름1, 인덱스) => {
        return <div key={인덱스}>내용: {변수이름1}</div>;
      })}
      <h3>{Text}</h3>
    </>
  );
}

export default List;
