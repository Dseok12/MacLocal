import React from 'react';
import './EmotionItem.css';
import { getEmotionImages } from '../util/get-emotion-image.js';

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
  return (
    <div className={`EmotionItem ${
      isSelected ? `EmotionItem_on_${emotionId}` : ""}`
    }>
      <img className='emotion_image' src={getEmotionImages(emotionId)} />
      <div className='emotion_name'>
        {emotionName}
      </div>
    </div>
  )
}

export default EmotionItem