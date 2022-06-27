import React, {useState, useEffect} from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../Style/UploadCSS";

const Upload = (props) => {

  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.ContentList];
    tempArr.push(Content);
    props.setContentList([...tempArr])
    setContent("");
  }

  return (
    <UploadDiv>
      <h4>Upload페이지</h4>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={Content}
          onChange = {(e) => {
            setContent(e.currentTarget.value);
          }}
        />

        <label htmlFor="content">내용</label>
        <textarea />
        <UploadButtonDiv>
          <button
            onClick={() => {
              onSubmit();
            }}
          >
            제출!
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  )
}

export default Upload;