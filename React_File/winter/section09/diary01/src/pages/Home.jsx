/**
 * 1. App.jsx에서 Context를 epxport 한다.
 * 2. state를 불러와야 하는 컴포넌트로 넘어온다.
 * 3. useContext를 import하고 App.jsx에서 export한 Context를 불러온다.
 * */

import { useContext, useState } from "react";
import { DiaryStateContext } from "../App.jsx";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import Header from "../components/Header.jsx";

const getMonthlyData = (pivotDate, data) => {
  // pivotDate의 년도와 월인데 해당하는 월에 1일에 0시 0분 0초에 해당하는 데이터 객체를 만들어서 넣어놨다.
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTiem = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTiem
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);

  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </>
  );
};

export default Home;
