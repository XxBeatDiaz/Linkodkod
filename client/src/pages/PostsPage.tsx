import "./PostsPage.css";
import { fetchAction } from "../api/posts.api";
import { fakePosts } from "../mock/postsMock.ts";
import Post from "../components/Post";
import type { PostType } from "../types/postType";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>(fakePosts);

  function fetchAllPosts() {
    fetchAction("posts", setPosts);
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((p) => (
        <Post
          key={p.id}
          img={p.img}
          description={p.description}
          authorName={p.authorName}
          timeStemp={p.timeStemp}
        >
          {p.children}
        </Post>
      ))}
    </div>
  );
}
