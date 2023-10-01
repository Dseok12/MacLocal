import { useRef, useState } from 'react';
import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "jeong",
//     content: "하이 1",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "jeong1",
//     content: "하이 1",
//     emotion: 3,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "jeong3",
//     content: "하이 1",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },
// ]

function App() {

  const  [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditer onCreate = {onCreate} />
      <DiaryList diaryList = {data} />
    </div>
  );
}

export default App;
