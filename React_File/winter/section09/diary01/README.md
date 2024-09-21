# React-Router-dom 학습(ver.16.\*에서만)

1. `npm i react-router-dom` 실행.
2. main.jsx에 import { BrowserRouter } from 'react-router-dom';을 실행.
3. main.jsx에 <App/>을 <BrowserRouter></BrowserRouter>로 감싼다. (아래와 같이 실행)

---

```javascript
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

4. App.jsx에 import { Routes, Route } from "react-router-dom";을 실행.
5. <Routes></Routes>안에 <Route />를 넣는다. 단, <Routes></Routes>안에는 <Route />만 넣을 수 있다.
6. <Route />의 속성으로는 path와 element가 있는데, path는 말 그대로 경로를 설정해주는 놈이다. element는 path의 경로로 들어갔을 때 보여줘야할 컴포넌트를 넣는다. (아래의 예시)

---

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/new" element={<New />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<Notfound />} />
</Routes>
```

---

---

### 20240908 작성

7. react-router-dom은 Link라는 컴포넌트를 지원한다.
   `<Link></Link>`는 html의 a태그 즉,

```html
<a href=""></a>
```

위 코드와 같은 역할을 한다.
사용방법은 이러하다.

```javascript
<Link to={"/"}>Home</Link>
<Link to={"/about"}>About</Link>
<Link to={"/new"}>New</Link>
```

8. `<button></button>`태그로 페이지를 이동해야해 할 때, react-router-dom의 컴포넌트인 useNavigate를 사용한다. 사용법은 다음과 같다.

```javascript
import { useNavigate } from "rect-router-dom";

const App = () => {
  const nav = Navigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <button onClick={onClickButton}>New 페이지로 이동</button>
    </>
  );
};
```

해당 번호의 작동은 6번이 먼저 완성된 후 사용할 수 있다.

9. 페이지의 라우팅의 세분화

- 9-1. useParams 사용하기

  - useParams는 페이징의 해당 id값을 불러오기위해 사용을 한다.<br/>
    path에 "/about/<i style="font-weight: bold;">:id</i>"로 라우팅을 하게 될 때 사용을 한다.<br/>

  ```javascript
  import { useParams } from "react-router-dom";

  const About = () => {
    const params = useParams();
    console.log(params);

    return (
      <>
        <p>{params.id}번째 일기 입니다.</p>
      </>
    );
  };

  export default About;
  ```

  - useSearchParams는 url에 쿼리문으로 라우팅을 할 때 사용한다.<br/>
    `http://localhost:5173/?value=name`
    형식의 url 이동을 할 때 사용된다.

  ```javascript
  import { useSearchParams } from "react-router-dom";
  import React from "react";

  const Home = () => {
    const [params, setParams] = useSearchParams();

    // url에 http://localhost:5173/?value=name로 라우팅을 하게 되면 console창에 name이 출력 된다.
    console.log(params.get("value"));

    return <div>Home</div>;
  };

  export default Home;
  ```

---

# 이미지 관리하기

방법은 2가지로 나뉜다.

1. assets폴더에서 관리

- 이미지가 몇개만 필요할 때 assets폴더에서 관리한다.
  - 이유는 assets폴더에서 관리를 하게 되면 서버에서 그때그때 다운로드 받을 필요 없이 웹브라우저 메모리에 저장된 이미지를 바로바로 꺼내 쓸 수 있어 웹 속도에 영향을 미치지 않는다. 다운로드를 최초 1회만 진행하기 때문에 웹 로딩 속도에 개선을 줄 수 있다.

```javascript
import img1 from "./assets/img1.jpg";

const App => () = {
  return (
    <>
      <img src={img1} />
    </>
  )
}

export default App

```

위와 같이 이미지를 불러오면 각 파일마다 `import img1 from "./assets.img.jpg"`를 작성해줘야한다.
이와 같은 번거로움을 제거하기 위해 이미지를 관리하는 파일을 작성한다.
src폴더 밑에 util 파일을 만들고 get-img.js파일을 만든다.

```javascript
// get-img.js파일

import img1 from "./../assets/img1.png";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";

export function getImages(imgId) {
  switch (imgId) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    default:
      return null;
  }
}
```

위와 같이 작성 후 App.jsx파일에

```javascript
import { getImages } from "./util/get-img.js";

const App = () => {
  return (
    <>
      <div>
        <img src={getImages(1)} alt="" />
        <img src={getImages(2)} alt="" />
        <img src={getImages(3)} alt="" />
        <img src={getImages(4)} alt="" />
        <img src={getImages(5)} alt="" />
      </div>
    </>
  );
};

export default App;
```

위와 같이 개선 작업으로 이미지를 불러오는 수고스러움을 덜어낼 수 있다.

2. public폴에서 관리를 할 수 있다.

- public폴에서 이미지 관리 <i sytle="font-weight:bold;">작업 시 새로고침을 할 때마다 이미지를 서버에서 다운</i>을 받는다. 하지만 이미지가 많을 시 public폴더에 이미지를 관리하는 것이 효율적일 수도 있다.

```javascript
function App() {
  return (
    <>
      {/* 다수의 이미지를 사용할 때는 public폴더에서 운영을 하는 것이 좋다. */}
      <div>
        <img src={"public/img/img1.jpg"} alt="" />
        <img src={"public/img/img2.jpg"} alt="" />
        <img src={"public/img/img3.jpg"} alt="" />
        <img src={"public/img/img4.jpg"} alt="" />
        <img src={"public/img/img5.jpg"} alt="" />
      </div>
    </>
  );
}

export default App;
```

- 위와 같이 많은 이미지를 관리 할 시 public 폴더 밑에 img폴더를 만들고 하위에 이미지 역할에 따라 폴더를 만들고 관리할 수 있다.

---

# useReucer

#### 컴포넌트 내부에 새로운 State를 생성하는 React Hook 모든 useState는 useReducer로 대체 가능.

# useContext

#### 데이터간의 데이터를 전달하는 또 다른 방법
