import {db} from '../db.js'
import jwt from 'jsonwebtoken';

export const getPosts = (req, res) => {
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if(err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
}
export const getPost = (req, res) => {
  const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `data` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

  db.query(q, [req.params.id], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
}
export const addPost = (req, res) => {
  res.json("from controller")
}
export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if(!token) return res.status(401).json("Not authenicated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if(!token) return res.status(403).json("토큰값이 존재 하지 않음");

    const postId = req.params.id
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"

    db.query(q, [postId, userInfo.id], (err, data) => {
      if(err) return res.status(403).json("오직 당신의 포스팅만 지울 수 있습니다!")

      return res.json("포스팅을 지웠습니다!")
    })
  })
}
export const updatePost = (req, res) => {
  res.json("from controller")
}