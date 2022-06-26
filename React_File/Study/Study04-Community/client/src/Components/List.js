import React, { useState, useEffect } from "react";
import axios from "axios";

const List = (props) => {

  const [text, setText] = useState("");

  useEffect(() => {

    let body = {
      text: 'hellow'
    }

    axios.post('/api/test', body)
    .then((res) => {
      // alert('요청성공')
      console.log(res);
      setText(res.data.text);
    })
    .catch((error) => {
      // alert('요청실패')
      console.log(error);
    });
  },[])

  return (
    <>
      <h1>List</h1>
      <h3>{text}</h3>
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