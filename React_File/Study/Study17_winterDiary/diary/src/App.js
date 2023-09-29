import './App.css';
import DiaryEditer from './DiaryEditer';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "jeong",
    content: "하이 1",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "jeong1",
    content: "하이 1",
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "jeong3",
    content: "하이 1",
    emotion: 4,
    create_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditer />
      <DiaryList diaryList = {dummyList} />
    </div>
  );
}

export default App;
