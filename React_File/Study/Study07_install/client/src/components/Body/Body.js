import React, { useState } from 'react';
import './Body.scss';

function Body() {
  const [number, setNumber] = useState(0);
  const [string, setString] = useState('나는 useState얌!');
  const [arr, setArr] = useState([1, 2, 3]);
  const [obj, setObj] = useState({ name: 'jeong', age: 28 });

  console.log(number);
  // console.log(setNumber);

  console.log(string);
  // console.log(setString);

  console.log(arr);
  // console.log(setArr);

  console.log(JSON.stringify(obj.name));
  // console.log(setObj);
  return (
    <div>
      <div className="BodyWrap">
        <div className="inner">
          <h1>{number}</h1>
          <h1>{string}</h1>
          <h1>{arr}</h1>
          <h1>{obj.name}</h1>
          <h1>{obj.age}</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
