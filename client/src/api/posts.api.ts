import type { PostType } from "../types/postType";

export async function fetchActionGet(endPoint = "", setFunc?: any) {
    try {
        const response = await fetch(`http://localhost:3000/${endPoint}`);
        const result = await response.json();
        setFunc(result);
    } catch (error) {
        console.log(error);
    }
}

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

export async function fetchActionPut(endPoint = "", value: string) {
    if (!value) {
        return false;
    }

    const response = await fetch(`http://localhost:3000/${endPoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({value}),
    });
    
    const result = await response.json();
    return result.msg;
}
