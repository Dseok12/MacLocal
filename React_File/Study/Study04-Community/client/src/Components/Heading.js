import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"100%"
      }}
    >
      <h1>Hello, React</h1>
      <Link to="/">Home</Link>
      <Link to="/list">리스트</Link>
      <Link to="/upload">업로드</Link>
    </div>
    </>
  )
}

export default Heading;