import { getAllPosts } from "../db/posts.dal.js"

export async function getPosts(req, res){
    try {
        const posts = await getAllPosts();
        if (!posts) {
            return res.status(404).json({});
        }
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json(error);
    }
}