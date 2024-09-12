import './App.css'
import './css/reset.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Diary from './pages/Diary.jsx';
import New from './pages/New.jsx';
import Edit from './pages/Edit.jsx';
import Notfound from './pages/Notfound.jsx'; 

const mockData = [
  {
    id: 1,
    createDate: new Date("2024-09-12").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date("2024-09-11").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createDate: new Date("2024-07-10").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
  {
    id: 4,
    createDate: new Date("2023-10-31").getTime(),
    emotionId: 4,
    content: "4번 일기 내용",
  },
]

const reducer = (state, action) => {
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.id)
      );
    default:
      return state;

  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content
      },
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content
      },
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onUpdate,
          onDelete,
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
