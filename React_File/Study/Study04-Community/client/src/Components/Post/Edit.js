import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UploadDiv, UploadForm, UploadButtonDiv } from "../../Style/UploadCSS";
import axios from 'axios';
// import { Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Edit = () => {

  let params = useParams();
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [Title, setTitle] = useState('')
  const [Content, setContent] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 수정을 위해 사용하는 useEffect
  useEffect(() => {
    setTitle(PostInfo.title);
    setContent(PostInfo.content);
  }, [PostInfo]);

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
      postNum: params.postNum,
    };

    // 서버로 전달
    axios.post('/api/post/edit', body).then((res) => {
      if(res.data.success){
        alert('글 수정이 완료되었습니다.');
        
        // 수정하고 제출하면 이동하는 경로
        navigate(`/post/${params.postNum}`);
      }else{
        alert('글 수정에 실패하였습니다.')
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

        <label htmlFor="content">내용</label>
        <textarea
          value={Content}
          onChange = {(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            className='cancel'
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            취소!
          </button>
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

export default Edit