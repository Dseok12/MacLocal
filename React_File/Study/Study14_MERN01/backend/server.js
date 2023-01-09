const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");

const app = express();

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes MiddleWares
app.use("/api/users", userRoute);


// Routes
app.get("/", (req, res) => {
  res.send("Home Page")
});

// Error Middleware
app.use(errorHandler)

// Connect to DB and Start Server
const PORT = process.env.PORT || 5050;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

/**
 * https://www.youtube.com/watch?v=wlxx3SCHZKk&t=174s
 * 2:13:03 / 5:18:48
 */
