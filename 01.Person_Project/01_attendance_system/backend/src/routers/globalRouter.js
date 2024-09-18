import express from "express";
import {
  mainHome,
  join,
} from "../controllers/userController.js"

const globalRouter = express.Router();

globalRouter.get("/", mainHome);
globalRouter.get("/join", join);

export default globalRouter;