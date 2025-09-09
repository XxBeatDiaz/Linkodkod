import NavBar from "./NavBar";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="topHeader">
        <div className="slogen">Linkodkod</div>
        <img className="logo" src="/logo.jpg" alt="logo img" />
      </div>
        <NavBar></NavBar>
    </header>
  )
}
