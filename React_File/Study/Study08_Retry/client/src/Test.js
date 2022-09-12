import React from 'react';

function Test() {
  let Arr = [1, 2, 3];

  return (
    <div>
      <h1>Hello, React!</h1>
      {Arr.map((변수, 인덱스) => {
        return (
          <div>
            <p key={인덱스}>{변수}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
