import express from "express";

const PORT = 4400;

const app = express();

const gossipMiddleware = (res, req, next) => {
  console.log("중간!");
  // return res.send("allal")
  next();
}

const handleHome = (req, res) => {
  console.log("first")
  return res.end();
}

app.get("/", gossipMiddleware, handleHome)

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀🚀🚀`);

app.listen(PORT, handleListening);