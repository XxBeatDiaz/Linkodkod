import express from "express";
import { getPosts, getOnePost, creatNewPost } from "../ctrl/posts.ctrl.js";
import { isPostExists } from "../middlewares/posts.mid.js";

const postsRoutes = express.Router();

postsRoutes.get('/', getPosts);
postsRoutes.get('/:id', getOnePost);
postsRoutes.post('/add-post', await isPostExists, creatNewPost);

export default postsRoutes;