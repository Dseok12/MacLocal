import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req,res) => {

  // 유저가 존재하는지 확인.
  const q = "SELECT * FROM users WHERE email = ? OR username = ?"

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("유저가 이미 존재합니다!");

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
    const values = [
      req.body.username,
      req.body.email,
      hash,
    ]

    db.query(q, [values], (err, data) => {
      if(err) return res.json(err);
      return res.status(200).json("회원가입을 축하드립니다!");
    })
  });
  
}
export const login = (req,res) => {

  // 사용자 확인
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if(err) return register.json(err);
    if(data.length === 0) return res.status(404).json("사용자를 찾지 못했습니다.");
    
    // 비밀번호 확인
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if(!isPasswordCorrect) return res.status(400).json("아이디 및 비밀번호를 잘못 입력하셨습니다.")

    // Cookie에 저장하기
    const token = jwt.sign({id:data[0].id}, "jwtkey");
    const {password, ...other} = data[0]

    res.cookie("access_token", token, {
      httpOnly: true
    }).status(200).json(data[0]);
    
  })



}
export const logout = (req,res) => {
  res.clearCookie("access_token", {
    sameSite: "none",
    secure: true,
  }).status(200).json("로그아웃을 하였습니다.");
}