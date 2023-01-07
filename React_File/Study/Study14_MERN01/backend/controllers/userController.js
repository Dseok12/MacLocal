const registerUser = (req, res) => {
  if(!req.body.email){
    res.status(400)
    throw new Error("이메일을 추가해주세요.")
  }
  res.send("Register User")
};


module.exports = {
  registerUser,
}
