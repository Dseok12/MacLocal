import React, { useState } from 'react';

function Test2() {
  const [변수이름, set변수이름] = useState([]);

  /**
   * 1.첫번째 인자 : 변수의 이름
   * 2.두번째 인자 : State를 바꿔주는 함수
   * 3.useState 인자 : State의 초기 Type, 값
   */
  return (
    <div>
      <h1>Test2.js</h1>
      {변수이름}
      <button
        onClick={() => {
          let arr = [];
          arr = [...변수이름];
          arr.push(arr.length + 1);
          set변수이름([...arr]);
        }}
      >
        변경
      </button>
    </div>
  );
}

export default Test2;
