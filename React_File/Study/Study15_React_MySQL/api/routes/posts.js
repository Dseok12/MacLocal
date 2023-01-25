import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

const router = express.Router();

/**
 * ../controllers/post.js에 있는 각 함수를 가져와서
 * index.js에 postRoutes로 뿌려준다
 */
router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

export default router;