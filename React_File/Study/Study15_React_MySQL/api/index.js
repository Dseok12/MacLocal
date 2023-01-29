import express from "express";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import cookieParser from "cookie-parser";
import multer from "multer"; // multer -> 이미지 파일 업로드 시켜주는 라이브러리 { https://www.npmjs.com/package/multer }

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })


// 여기서 오류가 났었음. 작업 내용 -> 이미지 업로드하기 오류 / multer 사용법
// 여기서 멈추면 이미지가 컴파일이 안되서 DiskStorage 설정을 따로 해줘야함.
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(8800, () => {
  console.log("Connected!")
});