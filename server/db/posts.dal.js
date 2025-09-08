import { readDBFile, writeDBFile } from "./fs.js";

const PATH = "./db/fakePostDb.txt";

export async function getAllPosts() {
    const posts = await readDBFile(PATH);
    console.log(`dal${posts}`);
    
    return posts;
}