import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
const navHeader: React.FC = () => (
  <header className="App-header">
    <img src={logo} alt="logo" className="App-logo" />
    <nav style={{ width: "100%" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/my-exhibition">My exhibition</NavLink>
    </nav>
  </header>
);

export default navHeader;
