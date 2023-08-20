import express from "express";
import { getPosts } from "../controllers/post.js";

const router = express.Router();

/**
 * index.js로 보내줌.
 * 하지만 여기서 직접 코드를 작성하는 것은 좋지 않음.
 * 그래서 controllers 폴더를 만들어 거기서 코드를 작성함.
 * post.js의 코드가 작동.
 */
router.get("/", getPosts)

export default router;