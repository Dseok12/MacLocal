import React, { useState } from "react";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ImageUpload from "./ImageUpload";

const Upload = (props) => {

  const [Title, setTitle] = useState('')
  const [Content, setContent] = useState('');
  const [Image, setImage] = useState("");

  let navigate = useNavigate();

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if(Title === '' || Content === ''){
      return alert('모든 창을 채워주세요.');
    }

    // 보낼 데이터 설정
    let body = {
      title: Title,
      content: Content,
      image: Image,
    };

    // 서버로 전달
    axios.post('/api/post/submit', body).then((res) => {
      if(res.data.success){
        alert('글 작성이 완료되었습니다.');
        navigate('/list');
      }else{
        alert('글 작성에 실패하였습니다.')
      }
    }).catch((err) => {
      console.error(`${err}`)
    });
    // // 서버로 전달

  }
  // // onSubmit

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange = {(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <ImageUpload setImage={setImage} />
        <label htmlFor="content">내용</label>
        <textarea
          value={Content}
          onChange = {(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
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