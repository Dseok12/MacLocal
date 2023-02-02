import Express from "express";
const app = Express();
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import postRouter from "./routes/posts.js";
import likeRouter from "./routes/likes.js";
import commentRouter from "./routes/comments.js";





/** ./routes/user.js에서 받아옴 */
app.use("/api/auths", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/likes", likeRouter)
app.use("/api/comments", commentRouter)

app.listen(8800, () => {
  console.log("8800 서버 정상 작동!!😃");
})