import express from "express";
const app = express();
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import likeRouter from "./routes/likes.js";
import commentRouter from "./routes/comments.js";
import cors from "cors";
import cookieParser from "cookie-parser";


/** Middlewares */
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  
}))
app.use(cookieParser())



/** ./routes/user.js에서 받아옴 */
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/likes", likeRouter)
app.use("/api/comments", commentRouter)

app.listen(8800, () => {
  console.log("8800 서버 정상 작동!!😃 / 1:01:16");
})