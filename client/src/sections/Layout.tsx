import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

type Main = {
  children: React.ReactNode;
};

export default function layout({ children }: Main) {
  return (
    <div className="layout">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
