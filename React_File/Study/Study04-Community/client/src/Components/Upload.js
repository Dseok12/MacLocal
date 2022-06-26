import React, {useState, useEffect} from "react";

const Upload = (props) => {

  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr])
    setContent("");
  }

  // useEffect(() => {
  //   // 컴포넌트가 나타날 때 실행될 코드
  //   // alert('upload 컴포넌트가 나타났습니다.')
  //   return() => {
  //     // 컴포넌트가 죽을 때 실행될 코드
  //     // alert('upload 컴포넌트가 죽었습니다.')
  //   }

  // }, [])

  return (
    <>
    <h4>Upload페이지</h4>
    <div
      style={{
        display:"flex",
        alignItems: "center"
      }}
    >
      <input
        type="text"
        value={Content}
        onChange = {(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style = {{ margiTop: "1rem " }}
      >
        제출!
      </button>
    </div>
    </>
  )
}

export default Upload;