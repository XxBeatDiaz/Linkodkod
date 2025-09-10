import { useEffect, useState } from "react";
import { fetchActionPost } from "../api/posts.api";
import type { PostType } from "../types/postType";
import "./CreatePost.css";

export default function CreatePost() {
  const [id, setId] = useState<number>();
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState<string>("../post.png");
  const [newPost, setNewPost] = useState<PostType>();
  const [res, setRes] = useState<string>("");

  function createPostObj() {
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString();

    const postObj = {
      id: id,
      authorName: author,
      description: description,
      img: img,
      content: content,
      timeStemp: formattedTime,
      countLikes: 0,
      countDisLikes: 0,
    } as PostType;

    setNewPost(postObj);
  }

  async function addPost(newPost: PostType) {
    const isSuccess = await fetchActionPost("posts/add-post", newPost);
    setRes(isSuccess);
  }

  useEffect(() => {
    addPost(newPost!);

    return () => {};
  }, [newPost]);

  function handleId(event: React.ChangeEvent) {
    setId(event.target.value);
  }

  function handleDescription(event: React.ChangeEvent) {
    setDescription(event.target.value);
  }

  function handleContent(event: React.ChangeEvent) {
    setContent(event.target.value);
  }

  function handleAuthor(event: React.ChangeEvent) {
    setAuthor(event.target.value);
  }

  function handleImg(event) {
    setImg(event.target.value);
  }

  return (
    <div>
      <div className="idInput">
        <label htmlFor="id">ID: </label>
        <input
          id="id"
          type="number"
          placeholder="Enter ID"
          value={id}
          onChange={handleId}
        />
      </div>

      <div className="author">
        <label htmlFor="author">Full name: </label>
        <input
          id="author"
          type="text"
          placeholder="Enter full name"
          value={author}
          onChange={handleAuthor}
        />
      </div>

      <div className="description">
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescription}
          placeholder="Enter description"
        ></textarea>
      </div>

      <div className="createContent">
        <label htmlFor="content">Content: </label>
        <textarea
          id="content"
          value={content}
          onChange={handleContent}
          placeholder="Enter content"
        ></textarea>
      </div>

      <div className="selectImg">
        <label htmlFor="selectImg">Select image: </label>
        <select
          defaultValue="post.png"
          id="selectImg"
          name="img"
          onClick={handleImg}
        >
          <option value="../post.png">post1</option>
          <option value="../post1.png">post2</option>
          <option value="../post2.png">post3</option>
        </select>
        <img src={img} alt="post" />
      </div>

      <div className="submitBtn">
        <button type="submit" onClick={createPostObj}>
          Send
        </button>
      </div>
      {res}
    </div>
  );
}
