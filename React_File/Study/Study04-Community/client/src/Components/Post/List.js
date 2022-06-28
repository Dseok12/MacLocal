import React, { useState, useEffect } from "react";
import axios from "axios";
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
            <ListItem>
              <p className="title">{post.title}</p>
              <p>{post.content}</p>
            </ListItem>
          </div>
        )
      }) }
    </ListDiv>
    </>
  )
}

export default List;