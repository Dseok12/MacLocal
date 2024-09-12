import React from 'react';
import './DiaryItem.css';
import {getEmotionImages} from "../util/get-emotion-image.js"
import Button from './Button.jsx';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({id, emotionId, createDate, content}) => {

  const nav = useNavigate();

  return (
    <div className='DiaryItem'>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImages(emotionId)} />
      </div>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className='info_section'>
        <div className='create_date'>
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className='content'>
          {content}
        </div>
      </div>
      <div className='button_section'>
        <Button
          onClick={() => nav(`/edit/${id}`)}
          text={"수정하기"}
        />
      </div>
    </div>
  )
}

export default DiaryItem