import Header from "./Header";
import Footer from "./Footer";
import { logo, slogen } from "../mock/headerMock";

type Main = {
    children: React.ReactNode
} 

export default function layout({children}: Main) {
  return (
    <div className="layout">
        {/* {need to use "useContext" in header (props)"} */}
        <Header slogen={slogen} logo={logo}></Header>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
