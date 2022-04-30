import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/:category?" componnet={NewsPage} />
    </Routes>
    </>
  )
}

export default App;