import React, { useState, useEffect } from "react";
import axios from "axios";

const List = (props) => {

  useEffect(() => {
    axios.post('/api/test')
    .then((res) => {
      alert('요청성공')
      console.log(res);
    })
    .catch((error) => {
      alert('요청실패')
      console.log(error);
    });
  },[])

  return (
    <>
      <h1>List</h1>
      {props.ContentList.map((content, index) => {
        return(
          <div
            key={index}
            style={{
              width: "100%",
              marginLeft: "1rem "
            }}
          >
            내용:{content}
            <hr/>
          </div>
        )
      }) }
    </>
  )
}

export default List;