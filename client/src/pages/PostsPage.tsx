import "./PostsPage.css";
import { fetchActionGet } from "../api/posts.api";
import Post from "../components/Post";
import type { PostType, Posts } from "../types/postType";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function PostsPage() {
  const [posts, setPosts] = useState<Posts>();


  function fetchAllPosts() {
    fetchActionGet("posts", setPosts);
  }

  function handlePosts(posts: Posts) {
    if (!posts) {
      console.log("Not Found");
      return <h1 className="errorMsg">None posts found</h1>
    }

    return posts?.map((p: PostType) => (
        <Post 
          key={p.id}
          img={p.img}
          description={p.description}
          authorName={p.authorName}
          timeStemp={p.timeStemp}
          countLikes={p.countLikes}
          countDisLikes={p.countDisLikes}
        >
          {p.children}
        </Post>
      ))
  }


  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="posts">
      <Link className="addPostBtn" to="/AddPost">+Post</Link>
      {handlePosts(posts)}
    </div>
  );
}
