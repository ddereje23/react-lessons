import { Link } from "react-router-dom";
// Header
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} />
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
