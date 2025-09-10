import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchActionGet } from "../api/posts.api";
import type { PostType } from "../types/postType";
import "./PostPage.css";

export default function PostPage() {
  const fakePost = {
    id: "1",
    img: "../post.png",
    description: "Fake",
    content: "Fake content",
    authorName: "avi",
    timeStemp: "09/04/20",
    countLikes: 0,
    countDisLikes: 2,
    children: "",
  };

  const [post, setPost] = useState<PostType>(fakePost);
  const [counterLikes, setCountLikes] = useState<number>(post.countLikes);
  const [counterDisLikes, setCountDisLikes] = useState<number>(
    post.countDisLikes
  );

  const { id } = useParams();

  function fetchOnePost(id: string) {
    fetchActionGet(`posts/${id}`, setPost);
  }

  useEffect(() => {
    fetchOnePost(`${id}`);
  }, [id]);

  function handleLikes() {
    setCountLikes(counterLikes + 1);
  }

  function handleDislikes() {
    setCountDisLikes(counterDisLikes + 1);
  }

  return (
    <div className="postPage">
      <img className="postImg" src={post.img} alt="postImg" />

      <div className="content">Content: {post.content}</div>

      <div className="bottomPage">
        <div className="likes">
          <button onClick={handleLikes} className="likeBtn like">
            👍{counterLikes}
          </button>

          <button onClick={handleDislikes} className="likeBtn disLike">
            👎{counterDisLikes}
          </button>
        </div>

        <div>Author: {post.authorName} </div>

        <div>{post.timeStemp}</div>
      </div>
    </div>
  );
}
