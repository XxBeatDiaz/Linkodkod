import { getAllPosts, getPostById, creatPost } from "../db/posts.dal.js";

export async function getPosts(req, res){
    try {
        const posts = await getAllPosts();
        if (!posts) {
            return res.status(404).json();
        }
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function getOnePost(req, res) {
    try {
        const id = req.params.id;
        const post = await getPostById(id);
    
        if (!post) {
            return res.status(404).json();
        }
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function creatNewPost(req, res) {
    try {
        const newPost = req.body;
        creatPost(newPost);
        return res.status(200).json("nice");
    }
    } catch (error) {
        return
    }