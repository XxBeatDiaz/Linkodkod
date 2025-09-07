import "./PostsPage.css";
import Post from "../components/Post";
import { type PostType } from "../types/postType";

type Posts = {
  posts: PostType[];
};

export default function PostsPage({ posts }: Posts) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.id}
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
