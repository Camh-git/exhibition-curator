import logo from "../assets/images/Exhibition-curator-logo.svg";
import home_icon from "../assets/images/icons/home_white_24dp.svg";
import list_icon from "../assets/images/icons/list_white_24dp.svg";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const navHeader: React.FC = () => (
  <header className="App-header">
    <img src={logo} alt="logo" className="App-logo" />
    <nav style={{ width: "100%" }}>
      <NavLink to="/">
        Home
        <img src={home_icon} alt="Home" />
      </NavLink>
      <NavLink to="/my-exhibition">
        My exhibition
        <img src={list_icon} alt="My exhibtion" />
      </NavLink>
    </nav>
  </header>
);

export default navHeader;
