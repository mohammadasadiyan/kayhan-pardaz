import Home from "./components/Home";
import Store from "./components/Store"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <section className="comingsoon">
        <p>سایت در حال بروز رسانی | سایت برای سیستم های کامپیوتری در دسترس است</p>
      </section>
    </div>
  );
}

export default App;
