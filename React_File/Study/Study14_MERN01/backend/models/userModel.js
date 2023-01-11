const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: [true, "이름을 입력해주세요."]
  },
  email: {
    type: String,
    required: [true, "이메일을 입력해주세요."],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "옳바른 이메일인지 확인해주세요."
    ]
  },
  password: {
    type: String,
    required: [true, "비밀번호를 입력해주세요."],
    minLength: [6, "6글자 이상 입력해주세요"],
    // maxLength: [23, "23글자 이하 입력해주세요"],
  },
  photo: {
    type: String,
    required: [true, "사진을 넣어주세요."],
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiVYQecray72RFjJD-VReNzOsmrmiFJdvEvBEUNVEyQ&s"
  },
  phone: {
    type: String,
    default: "+81"
  },
  bio: {
    type: String,
    maxLength: [250, "250글자 이하 입력해주세요"],
    default: "bio"
  }
}, {
  timestamps: true,
});

// 비밀번호 암호화해서 DB에 저장하기
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User