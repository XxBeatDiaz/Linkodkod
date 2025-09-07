import "./Post.css";
import { type PostType } from "../types/postType";


export default function Post({img, description, authorName, timeStemp} : PostType) {
  return (
    <div className="post">
        <div className="topPost">
            <img className="postImg" src={img} alt="postImg" />
            <p className="description">{description}</p>
        </div>
        <div className="bottomPost">
            <button className="likeBtn">Like</button>
            <div className="authorName">{authorName}</div>
            <div className="dateTime">{timeStemp}</div>
        </div>
    </div>
  )
}
