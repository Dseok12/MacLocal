import React from 'react';
import './DiaryItem.css';
import {getEmotionImages} from "../util/get-emotion-image.js"
import Button from './Button.jsx';

const DiaryItem = () => {

  const emotionId = 2;

  return (
    <div className='DiaryItem'>
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImages(emotionId)} />
      </div>
      <div className='info_section'>
        <div className='create_date'>
          {new Date().toLocaleDateString()}
        </div>
        <div className='content'>
          dnfanlkjflsdkjfb
        </div>
      </div>
      <div className='button_section'>
        <Button
          text={"수정하기"}
        />
      </div>
    </div>
  )
}

export default DiaryItem