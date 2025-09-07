import "./App.css";
import Layout from "./sections/Layout";
import PostsPage from "./pages/PostsPage";
import { posts } from "./mock/postsMock";

function App() {
  return (
    <div className="app">
      <Layout>
        <PostsPage posts={posts}></PostsPage>
      </Layout>
    </div>
  );
}

export default App;
