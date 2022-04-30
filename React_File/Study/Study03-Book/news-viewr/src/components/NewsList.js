import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @meadia screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({ category }) => {

  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try{
        // <<메뉴를 클릭 하면 해당 메뉴의 컨텐츠를 불러옴
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=fe3a727c3dd3403890cfad606e65b73d`,);
        // //메뉴를 클릭 하면 해당 메뉴의 컨텐츠를 불러옴>>
        setArticles(response.data.articles)
      } catch (e) {
        console.error(e)
      }
      setLoading(false);
    }
    fetchData();
  }, [category]);

  // 대기 중일 때 
  if(loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }

  // 아직 articles 값이 설정되지 않았을 때
  if(!articles){
    return null;
  }

  return (
    <NewsListBlock>
      {
        articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      }
    </NewsListBlock>
  )
}

export default NewsList;

