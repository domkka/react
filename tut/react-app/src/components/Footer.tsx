import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
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
export default Footer;
