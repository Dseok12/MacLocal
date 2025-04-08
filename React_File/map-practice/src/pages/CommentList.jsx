import React from 'react';
import './CommentList.css';

const CommentList = () => {
  const comments = [
    { id: 1, name: 'Alice', content: '정말 좋은 글이네요!' },
    { id: 2, name: 'Bob', content: '많이 배워갑니다. 감사합니다.' },
    { id: 3, name: 'Charlie', content: 'React map 함수가 이렇게 쓰이는군요!' },
  ];

  return (
    <div className="comment-container">
      <h2>댓글 목록</h2>
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <strong>{comment.name}</strong>:<span>{comment.content}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
