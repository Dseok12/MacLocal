import React from 'react';
import './_StudyLink.css';

const StudyLink = () => {
  return (
    <div className=''>
      <ul className="tuto_box">
          <li className="tuto_item">
            <h2>MySQL 01</h2>
            <p className="tuto_link">
              <a href="https://www.youtube.com/watch?v=0aPLk2e2Z3g&t=1089s">https://www.youtube.com/watch?v=0aPLk2e2Z3g&t=1089s</a>
            </p>
            <p className="tuto_time">
              연습: 2:19:30
            </p>
          </li>
          <li className="tuto_item">
            <h2>다음 튜토리얼</h2>
            <p className="tuto_link">
              <a href="https://www.youtube.com/watch?v=1EuNnZEp2sQ&t=204s">https://www.youtube.com/watch?v=1EuNnZEp2sQ&t=204s</a>
            </p>
            <p className="tuto_time">
              연습: 00:40:40
            </p>
          </li>
        </ul>
    </div>
  )
}

export default StudyLink