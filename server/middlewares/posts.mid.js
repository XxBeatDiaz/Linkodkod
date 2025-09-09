import { getAllPosts } from "../db/posts.dal.js";

export async function isPostExists(req, res, next) {
    try {
        const id = req.body.id
        const posts = await getAllPosts();
        posts.forEach(post => {
            if (post.id == id) {
                return res.status(400).json({msg: "already exists"});
            }
        });
    } catch (error) {
        return res.status(500).json();
    }
    next();
}