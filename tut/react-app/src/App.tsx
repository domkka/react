import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
