import {db} from "../db.js";
import bcrypt from "bcryptjs"

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

}
export const logout = (req,res) => {

}