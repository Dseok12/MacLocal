import express from 'express';
import globalRouter from "./routers/globalRouter.js";
const cors = require('cors');
const corsOptions = {
  origin:["http://localhost:5173"],
};

const app = express();
const PORT = 5000;

// CORS 설정
app.use(cors(corsOptions));

// JSON 파싱 설정
app.use(express.json());

app.use("/", globalRouter);

// 간단한 API 엔드포인트
app.get('/api', (req, res) => {
  res.json({ message: 'React와 Node를 연결했습니다!!!' });
});

const handelStartServer = () => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handelStartServer)