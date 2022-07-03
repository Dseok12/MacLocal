import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false)

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
    // console.log(PostInfo)
  }, [PostInfo]);

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
          <button className='delete'>삭제</button>
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