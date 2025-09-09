import { useState } from "react";
import { type PostType } from "../types/postType";
import "./Post.css";


export default function Post({img, description, authorName, timeStemp, countLikes, countDisLikes} : PostType) {
  const [counterLikes, setCountLikes] = useState<number>(countLikes);
  const [counterDislikes, setCountDisLikes] = useState<number>(countDisLikes);

  function handleLikes(){
    setCountLikes(counterLikes + 1)
  }

  function handleDislikes() {
    setCountDisLikes(counterDislikes + 1)
  }

  return (
    <div className="post">
        <div className="topPost">
          <div className="borderImg">
            <img className="postImg" src={img} alt="postImg" />
          </div>
            <p className="description">{description}</p>
        </div>
        <div className="bottomPost">
          <div className="likes">
            <button onClick={handleLikes} className="likeBtn like">👍{counterLikes}</button>
            <button onClick={handleDislikes} className="likeBtn disLike">👎{counterDislikes}</button>
          </div>
            <div className="authorName">{authorName}</div>
            <div className="dateTime">{timeStemp}</div>
        </div>
    </div>
  )
}
