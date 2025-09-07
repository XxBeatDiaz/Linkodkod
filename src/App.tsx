import "./App.css";
import PostsPage from "./pages/PostsPage";
import { posts } from "./mock/posts";

function App() {
  return (
    <div className="app">
      <PostsPage posts={posts}></PostsPage>
    </div>
  );
}

export default App;
