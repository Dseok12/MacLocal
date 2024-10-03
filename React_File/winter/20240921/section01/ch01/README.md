# TodoList 만들면서 개념 정리

1. mockData(가짜데이터)는 컴포넌트(App) 밖에 넣어도 된다.
2. 만들어진 mockData는 useState에 넣어 컨트롤을 하는데

```javascript
const [todos, setTodos] = useState(mockData);
```

useState에 mockData를 넣는다. 3. List를 추가하기 위해서 onCreate함수를 만드는데

```javascript
const onCreate = (conntent) => {
  // 아래 객체는 초기화
  const newTodo = {
    id: 0,
    isDone: false,
    content: content,
    date: new Date().getTime(),
  };

  // 하단이 중요
  setTodos([newTodo, ...todos]);
  // 새롭게 받은 데이터를 업데이트 해주기 위해서 state를 활용해준다.
};
```

4. 만들어진 onCreate 함수를 아래 예시와 같이 props로 보내준다.

```javascript
<Editor onCreate={onCreate} />
```

5. 그럼 Editor 컴포넌트에서는

```javascript
const Editor = ({ onCreate }) => {
  // ...
};
```

위와 같이 props로 받아준다.

6. 다음은 input태그에 value 값을 받는 방법이다. 약간 공식처럼 활용되고 있는 듯 하다.<br/>
   6-1. 먼저 해당 컴포넌트에 state를 불러온다.
   ```javascript
   const [changeInput, setChangeInput] = useState("");
   ```
   6-2. 값을 변경할 함수를 만들어준다.
   ```javascript
   const onChangeInput = (e) => {
     setChangeInput(e.target.value);
   };
   ```
   6-3. input 태그 셋팅
   ```html
   <input
     value="{changeInput}"
     onChange="{onChangeInput}"
     placeholder="아무거나 넣으세요."
   />
   ```
   6-4. props로 받아온 onCreate 함수를 onSubmit 함수에 넣고 onCreate 함수에 인수로 changeInput 넣기.
   ```html
   <script>
     const onSubmit = () => {
       onCreate(changeInput);
     };
   </script>
   <button onClick="{onSubmit}">추가</button>
   ```
7. 이러면 고유번호인 id값이 고정인 된다. 이를 해결하기 위해 useRef를 사용한다.

   > App.js에서 useRef를 import합니다.

   ```javascript
   //App.js
   // ...
   import { useRef, useState } from "react"; // <-- 여기
   // ...
   const App = () => {
     const [todos, setTodos] = useState(mockData);
     const idRef = useRef(3); // <-- 여기

     const onCreate = (content) => {
       const newTodo = {
         id: idRef.current++, // <-- 여기
         isDone: false,
         content: content,
         date: new Date().getTime(),
       };

       setTodos([newTodo, ...todos]);
     };
   };
   ```

   초기 값을 3으로 놓은 이유는 mockData와 id값이 겹치지 않게 하기 위해서이다.

8. onSubmit 함수 고도화. 시켜서 input에 입력 안했을 때 전송되지 않게하기, 전송 완료되고 빈 문자열로 만들기, 엔터로 전송시키기.

```javascript
import React, { useRef, useState } from "react"; // <-- 여기 1번
import "../css/components/Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(); // <-- 여기 2번

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }; // <-- 여기 6번 엔터로 입력시키기

  const onSubmit = () => {
    if (content === "") {
      alert("List를 입력해주세요");
      contentRef.current.focus();
      return;
    } else {
      alert("List가 잘 들어갔습니다.");
    } // <-- 여기 4번 if문 작성 - 사용자가 입력하지 않았을 때 전송 금지 및 전송 됐을 때 확인.
    onCreate(content);
    setContent(""); // <-- 여기 5번. 빈문자열로 만들기
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // <-- 여기 3번
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown} // <-- 여기 7번
        placeholder="새로운 투두..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
```
