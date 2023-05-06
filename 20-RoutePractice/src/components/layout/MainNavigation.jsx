import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const activeClassName = ({ isActive }) => (isActive ? classes.active : "");
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="quotes" className={activeClassName}>
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="new-quote" className={activeClassName}>
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
