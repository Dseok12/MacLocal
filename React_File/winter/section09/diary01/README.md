# React-Router-dom 학습(ver.16.*에서만)

1. ```npm i react-router-dom``` 실행.
2. main.jsx에 import { BrowserRouter } from 'react-router-dom';을 실행.
3. main.jsx에 <App/>을 <BrowserRouter></BrowserRouter>로 감싼다. (아래와 같이 실행)
---
  ```javascript
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ```
---
4. App.jsx에 import { Routes, Route } from "react-router-dom";을 실행.
5. <Routes></Routes>안에 <Route />를 넣는다. 단, <Routes></Routes>안에는 <Route />만 넣을 수 있다.
6. <Route />의 속성으로는 path와 element가 있는데, path는 말 그대로 경로를 설정해주는 놈이다. element는 path의 경로로 들어갔을 때 보여줘야할 컴포넌트를 넣는다. (아래의 예시)
---
```javascript
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/new' element={<New />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<Notfound />} />
</Routes>
```
---
---
### 20240908 작성

7. react-router-dom은 Link라는 컴포넌트를 지원한다.
```<Link></Link>```는 html의 a태그 즉,
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
8. ```<button></button>```태그로 페이지를 이동해야해 할 때, react-router-dom의 컴포넌트인 useNavigate를 사용한다. 사용법은 다음과 같다.
```javascript
import { useNavigate } from "rect-router-dom";

const App = () => {

  const nav = Navigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
      <button
        onClick={onClickButton}
      >New 페이지로 이동</button>
    </>
  )
}
```
해당 번호의 작동은 6번이 먼저 완성된 후 사용할 수 있다.

9. 페이지의 라우팅의 세분화
* 9-1. useParams 사용하기
  * useParams는 페이징의 해당 id값을 불러오기위해 사용을 한다.<br/>
  path에 "/about/<i style="font-weight: bold;">:id</i>"로 라우팅을 하게 될 때 사용을 한다.<br/>
  ```javascript
    import { useParams } from 'react-router-dom';

    const About = () => {

      const params = useParams()
      console.log(params)

      return (
        <>
          <p>{params.id}번째 일기 입니다.</p>
        </>
      )
    }

    export default About
  ```

  * useSearchParams는 url에 쿼리문으로 라우팅을 할 때 사용한다.<br/>
  ```http://localhost:5173/?value=name```
  형식의 url 이동을 할 때 사용된다.
  ```javascript
    import { useSearchParams } from 'react-router-dom'
    import React from 'react'

    const Home = () => {

      const [params, setParams] = useSearchParams();

      // url에 http://localhost:5173/?value=name로 라우팅을 하게 되면 console창에 name이 출력 된다.
      console.log(params.get("value"))

      return (
        <div>Home</div>
      )
    }

    export default Home
  ```