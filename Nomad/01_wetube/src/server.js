import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const POST = 4000
const app = express();
const looger = morgan("dev");

app.use(looger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


/** 서버 불러오기 */
const handleListening = () => {console.log(`http://localhost:${POST}`)};

app.listen(POST, handleListening);
/** 서버 불러오기 */