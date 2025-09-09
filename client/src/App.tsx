import "./App.css";
import Layout from "./sections/Layout";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="app">
      <Layout>
        <PostsPage ></PostsPage>
      </Layout>
    </div>
  );
}

export default App;
