import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import {
  PostDiv,
  SpinnerDiv,
  Post,
  BtnDiv
} from '../../Style/PostDetailCSS';

const Detail = () => {

  let params = useParams();
  let navigate = useNavigate();
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false)

  // 상세페이지에 뿌려주는 로직
  useEffect(() => {
    // console.log(params);
    let body = {
      postNum : params.postNum
    }
    axios.post('/api/post/detail', body).then((res) => {
      if(res.data.success){
        setPostInfo(res.data.post)
        setFlag(true)
      }
    }).catch((err) => {
      console.log(err)
    })
  }, []);



  useEffect(() => {
    console.log(PostInfo)
  }, [PostInfo]);



  // 삭제하기위한 함수
  const DeleteHandler = () => {
    if(window.confirm('정말로 삭제하시겠습니까?')){
      let body = {
        postNum : params.postNum
      }
      axios.post('/api/post/delete  ', body).then((res) => {
        if(res.data.success){
          alert('게시글이 삭제가 되었습니다!!');
          navigate('/list');
        }
      }).catch((err) => {
        alert('게시글 삭제 실패!!');
      })
    }
  }

  return (
    <PostDiv>
      {Flag ? (
      <>
        <Post>
          <h1>{PostInfo.title}</h1>
          <p>{PostInfo.content}</p>
        </Post>
        <BtnDiv>
          <Link to={`/edit/${PostInfo.postNum}`}>
            <button className='edit'>수정</button>
          </Link>
          <button
            className='delete'
            onClick={() =>{DeleteHandler()}}
          >삭제</button>
        </BtnDiv>
      </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
      
    </PostDiv>
  )
}

export default Detail;