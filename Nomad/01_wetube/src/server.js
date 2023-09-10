import express from "express";

const POST = 4000
const app = express();

/*
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if(url==="/protected"){
    return res.send("<h1>Not Allowed</h1>")
  }
  console.log("허가한다.")
  next();
};

const handleProtected = (req, res) => {
  return res.send("환영합니다.")
};
*/

const handleHome = (req, res) => {
  return res.send("<p>나는 여전히 배가 고프다</p>")
};

const handleLogin = (req, res) => {
  return res.send("<h1>로그인은 여기서</h1>")
};



/*
app.use(logger);
app.use(privateMiddleware);
app.get("/protected", handleProtected);
*/

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {console.log(`서버 시작!✈️  http://localhost:${POST}`)};

app.listen(POST, handleListening);