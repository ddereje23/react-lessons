// Header
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} />
      </a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
