import express from "express";
import { getPosts } from "../ctrl/posts.ctrl.js"

const postsRoutes = express.Router();

postsRoutes.get('/', getPosts);

export default postsRoutes;