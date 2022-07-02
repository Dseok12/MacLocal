import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const Detail = () => {

  let params = useParams();
  const [PostInfo, setPostInfo] = useState([]);
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
    console.log(PostInfo)
  }, [PostInfo]);

  return (
    <div>
      {Flag ? (
      <div>
        {PostInfo.title}
        {PostInfo.content}
      </div>
      ) : (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      
    </div>
  )
}

export default Detail;