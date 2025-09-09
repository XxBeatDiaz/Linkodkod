import { Route, Routes } from "react-router";
import PostsPage from "../pages/PostsPage";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Posts" element={<PostsPage />} />
        <Route path="/AddPost" element={<CreatePost/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
