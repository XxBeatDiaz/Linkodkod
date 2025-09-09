import "./PostsPage.css";
import { fetchAction } from "../api/posts.api";
import { fakePosts } from "../mock/postsMock.ts";
import Post from "../components/Post";
import type { PostType } from "../types/postType";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <Link to="/Home">Home</Link>
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
