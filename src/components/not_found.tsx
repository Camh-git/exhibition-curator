import { NavLink } from "react-router-dom";
const NotFound: React.FC = () => (
  <section>
    <br />
    <br />
    <h2>
      404: Not found. Please check your spelling,{" "}
      <NavLink to="/">or click here to go home</NavLink>
    </h2>
  </section>
);

export default NotFound;
