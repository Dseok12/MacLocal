import express from "express";
import morgan from "morgan";

const PORT = 4400;

const app = express();
const logger = morgan("dev")

const handleHome = (req, res) => {
  return res.send("I love middlewares!");
};

app.use(logger)
app.get("/", handleHome);

const handleListening = () =>{
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀🚀🚀`);
};

app.listen(PORT, handleListening);