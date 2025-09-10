import { useEffect, useState } from "react";
import { Link } from "react-router";
import Post from "../components/Post";
import { fetchActionGet } from "../api/posts.api";
import type { PostType, Posts } from "../types/postType";
import "./PostsPage.css";

export default function PostsPage() {
  const [posts, setPosts] = useState<Posts>();

  function fetchAllPosts() {
    fetchActionGet("posts", setPosts);
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  function handlePosts(posts: Posts) {
    if (!posts) {
      return <h1 className="errorMsg">None posts found</h1>
    }

    return posts.map((post: PostType) => (
        <Post 
          key={post.id}
          id={post.id}
          img={post.img}
          description={post.description}
          authorName={post.authorName}
          timeStemp={post.timeStemp}
          countLikes={post.countLikes}
          countDisLikes={post.countDisLikes}
        >
          {post.children}
        </Post>
      ))
  }

  return (
    <div className="posts">
      <Link className="addPostBtn" to="/AddPost">+Post</Link>
      {handlePosts(posts)}
    </div>
  );
}
