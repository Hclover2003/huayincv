import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <a>Huayin Luo</a>
        </li>

        <li>
          <Link to="/current">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
