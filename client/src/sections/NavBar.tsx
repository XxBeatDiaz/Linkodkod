import { Link } from "react-router";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
        <Link className="linkBtn" to="/Home">Home</Link>
        <Link className="linkBtn" to="/Posts">Posts</Link>
    </div>
  )
}
