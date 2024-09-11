import React from 'react';
import Header from '../components/Header.jsx';
import Button from "../components/Button.jsx";
import DiaryList from '../components/DiaryList.jsx';

const Home = () => {
  
  return (
    <>
      <Header
        title={`${new Date().getFullYear()}년 ${new Date().getMonth()+1}월`}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList
        
      />
    </>
  )
}

export default Home