const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

const PORT = process.env.PORT || 5050;

// Connect to DB and Start Server

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
 * 43:50 / 5:18:48
 */
