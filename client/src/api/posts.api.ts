import type { PostType } from "../types/postType";

//A function that accepts EndPoint and SetState and defines a new State after fetching.
export async function fetchActionGet(endPoint = "", setFunc?: any) {
    try {
        const response = await fetch(`http://localhost:3000/${endPoint}`);
        const result = await response.json();
        setFunc(result);
    } catch (error) {
        console.log(error);
    }
}

//A function that accepts EndPoint and Post and send to backand
export async function fetchActionPost(endPoint = "", post: PostType) {
    if (!post) {
        return false;
    }
    const response = await fetch(`http://localhost:3000/${endPoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const result = await response.json();
    return result.msg;
}