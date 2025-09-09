import "./App.css";
import Router from "./routes/Router";
import Layout from "./sections/Layout";

function App() {
  return (
    <div className="app">
      <Layout>
        <Router></Router>
      </Layout>
    </div>
  );
}

export default App;
