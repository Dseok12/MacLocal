import { db } from "../connect.js";
import bcrypt from "bcryptjs"

export const register = (req, res) => {
  /** TODO */

  /** 사용자가 존재하는지 확인 */
  const q = "SELECT FROM users WHERE username = ?"

  db.query(q,[req.body.username], (err, data) => {
    if(err) return res.status(500).json(err) // if(err) return res.status(500).send(err) <- 얘로도 사용가능.
    if(data.length) return res.status(409).json("이미 존재하는 사용자입니다.")

    /** 신규 사용자 만들기 */
  
  
    /** Hash the Password */
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
}
export const logout = (req, res) => {
  /** TODO */
}