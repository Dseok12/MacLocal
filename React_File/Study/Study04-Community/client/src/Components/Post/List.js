import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import {ListDiv, ListItem} from '../../Style/ListCSS'

const List = (props) => {

  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios.post('api/post/list').then((res) => {
      console.log(res.data);
      if(res.data.success){
        setPostList([...res.data.postList])
      }
    })
  }, [])

  return (
    <>
    <ListDiv>
      {PostList.map((post, idx) => {
        return(
          <div
            key={idx}
          >
            <ListItem
              key={idx}
            >
              <Link to={`/post/${post.postNum}`}>
                <p className="title">{post.title}</p>
                <p>{post.content}</p>
              </Link>
            </ListItem>
          </div>
        )
      }) }
    </ListDiv>
    </>
  )
}

export default List;