import React, {useState} from "react";

const Upload = (props) => {

  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr])
    setContent("");
  }

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