import { useEffect, useState } from "react";
import { fetchActionPost } from "../api/posts.api";
import type { PostType } from "../types/postType";
import "./CreatePost.css";

export default function CreatePost() {
  const [id, setId] = useState<number>(0);
  const [author, setAuthor] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [res, setRes] = useState("");

  async function addPost(id: number, author: string, img: string, description: string){
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString();

    const newPost = {
      id: id,
      img: img,
      description: description,
      authorName: author,
      timeStemp: formattedTime,
      countLikes: 0,
      countDisLikes: 0
    } as PostType;

    const isSuccess = await fetchActionPost("add-post", newPost);
    setRes(isSuccess);
  }

  useEffect(()=> {
    addPost()
  }, [])

  function handleId(event: React.ChangeEvent){
    setId(event.target.value);
  }

  function handleAuthor(event: React.ChangeEvent) {
    setAuthor(event.target.value);
  }

  function handleImg(event) {
    setImg(event.target.value);
  }

  function handleDescription(event: React.ChangeEvent) {
    setDescription(event.target.value)
  }

  return (
    <div>
      <div className="idInput">
        <label htmlFor="id">ID: </label>
        <input id="id" type="number" placeholder="Enter ID" value={id} onChange={handleId}/>
      </div>

      <div className="author">
        <label htmlFor="author">Full name: </label>
        <input id="author" type="text" placeholder="Enter full name" value={author} onChange={handleAuthor}/>
      </div>

      <div className="selectImg">
        <label htmlFor="selectImg">Select image: </label>
        <select id="selectImg" name="img"  onClick={handleImg}>
          <option selected value="post.png">post1</option>
          <option value="post1.png">post2</option>
          <option value="post2.png">post3</option>
        </select>
        <img src={img} alt="post" />
      </div>

      <div className="description">
        <label htmlFor="description">Description: </label>
        <textarea id="description" value={description} onChange={handleDescription} placeholder="Enter description"></textarea>
      </div>

      <div className="submitBtn">
        <button type="submit">Send</button> 
      </div>
      {res}
    </div>
  )
}
