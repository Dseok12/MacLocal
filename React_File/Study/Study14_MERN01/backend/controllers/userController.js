const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// 데이터베이스에 토큰 넣기
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:"1d"})
}

const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  // Validation
  if(!name || !email || !password){
    res.status(400)
    throw new Error("닉네임, 이메일, 비밀번호를 모두 작성해주세요.");
  }

  if(password.length < 6){
    res.status(400)
    throw new Error("비밀번호는 6자리 이상 사용해주세요.");
  }

  // 사용자가 이메일이 이미 존재할 때.
  const userExists = await User.findOne({email});

  if(userExists) {
    res.status(400)
    throw new Error("이미 존재하는 이메일입니다.");
  }

  // 새로운 사용자 등록하기
  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  // Generate Token 데이터베이스에 토큰 넣기
  const token = generateToken(user._id);

  // Send HTTP-only Cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if(user) {
    const {_id, name, email, photo, phone, bio} = user
    res.status(201).json({
      _id, name, email, photo, phone, bio, token
    })
  } else {
    res.status(400)
    throw new Error("정보가 일치 하지 않습니다.");
  }

});


module.exports = {
  registerUser,
}
