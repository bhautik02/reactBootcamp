import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const activeClassName = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={activeClassName} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClassName} to="/products">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
