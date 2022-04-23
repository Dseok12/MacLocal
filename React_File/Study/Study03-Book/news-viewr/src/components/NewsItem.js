import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display; flex;
  .thumbnail{
    margin-right: 1rem;
    img{
      display:block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2{
      margin: 0;
      a{
        color: block;
      }
    }
    p{
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
`;


const NewsItem = ({ article }) => {
  return (
    <div>

    </div>
  )
}

export default NewsItem;