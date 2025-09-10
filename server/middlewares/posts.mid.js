import { getPostById, getAllPosts } from "../db/posts.dal.js";

export async function isPostExists(req, res, next) {
    try {
        const newPost = req.body;
        const newPostId = newPost.id;

        if (!newPost || !newPostId) {
            return res.status(400).json({msg: "not post upload"})
        }

        const isExistsPost = await getPostById(newPostId);
        if (isExistsPost && isExistsPost.id === newPostId) {
            return res.status(400).json({msg: "already exists"});
        }

    } catch (error) {
        return res.status(500).json();
    }
    next();
}