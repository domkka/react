import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <h1>Dom</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <a href="https://github.com/domkka" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}

export default NavBar;
