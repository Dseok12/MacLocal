import { db } from "../connect.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  /** TODO */

  /** 사용자가 존재하는지 확인 */
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q,[req.body.username], (err, data) => {
    if(err) return res.status(500).json(err) // if(err) return res.status(500).send(err) <- 얘로도 사용가능.
    if(data.length) return res.status(409).json("이미 존재하는 사용자입니다.")

    /** 신규 사용자 만들기 */
  
  
    /** 비밀번호 암호화 */
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)

    const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"

    const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

    db.query(q,[values], (err, data) => {
      if(err) return res.status(500).json(err);
      return res.status(200).json("회원가입을 감사드립니다.")
    })
  })



}
export const login = (req, res) => {
  /** TODO */

  const q = "SELECT * FROM users WHERE username = ?"
  db.query(q,[req.body.username], (err, data) => {

    /** 사용자의 아이디가 잘못 되었을 때. */
    if(err) return res.status(500).json(err)
    if(data.length === 0) return res.status(404).json("사용자를 찾지 못했습니다!");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

    /** 사용자의 비밀번호가 잘못 입력되었을 때. */
    if(!checkPassword) return res.status(400).json("비밀번호 또는 사용자 이름이 잘못 되었습니다.");

    const token = jwt.sign({id:data[0].id}, "secretkey");
    
    const {password, ...others} = data[0]

    /** 암호화된 비밀번호가 쿠키에 남게 된다. */
    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(others)

  })
}
export const logout = (req, res) => {
  /** TODO */
  /** 로그아웃 하기 */
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none"
  }).status(200).json("사용자가 로그아웃 하였습니다.")
}