import { readDBFile, writeDBFile } from "./fs.js";

const PATH = "./db/fakePostDb.txt";

export async function getAllPosts() {
    const posts = await readDBFile(PATH);
    return posts;
}

export async function getPostById(id) {
    const posts = await readDBFile(PATH);
    const [post] = posts.filter((p) => p.id === id);
    
    if (!post) {
        return false;
    }
    return post;
}

export async function createPost(post) {
    const posts = await readDBFile(PATH);
    posts.push(post);
    const result = await writeDBFile(PATH, posts);
    if (!result) {
        return;
    }
    const newPosts = await readDBFile(PATH);
    return newPosts;
}