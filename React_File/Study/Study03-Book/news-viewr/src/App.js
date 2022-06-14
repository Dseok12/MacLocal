import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {

  return (
    <>
      <Route path="/:category?" componnet={NewsPage} />
    </>
  )
}

export default App;