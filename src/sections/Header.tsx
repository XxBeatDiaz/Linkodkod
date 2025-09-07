import { type headerType } from "../types/headerType"
import "./Header.css"

{/* {need to use "useContext" in header (props)"} */}
export default function Header({logo, slogen}: headerType) {
  return (
    <header>
        <div className="slogen">{slogen}</div>
        <img className="logo" src={logo} alt="logo img" />
    </header>
  )
}
