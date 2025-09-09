import { readDBFile, writeDBFile } from "./fs.js";

const PATH = "./db/fakePostDb.txt";

export async function getAllPosts() {
    const posts = await readDBFile(PATH);
    return posts;
}

export async function getPostById(id) {
    const posts = await readDBFile(PATH);
    const post = posts.filter((p) => p.id == id)
    return post;
}

export async function createPost(post) {
    const posts = await readDBFile(PATH);
    posts.push(post);
    await writeDBFile(PATH, posts);
    return posts;
}