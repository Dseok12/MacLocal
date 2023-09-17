import express from "express";
import { trending } from "../controllers/videoController.js";
import { join } from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
