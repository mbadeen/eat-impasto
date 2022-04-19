import { Link } from "gatsby";

import { link, nav } from "./Nav.module.css";

const Nav = () => (
  <nav className={nav}>
    <Link className={link} to="/events">
      Events
    </Link>
    <Link className={link} to="/menu">
      Menu
    </Link>
    <Link className={link} to="/catering">
      Catering
    </Link>
    <Link className={link} to="/faq">
      FAQ
    </Link>
    <Link className={link} to="/contact">
      Contact
    </Link>
  </nav>
);

export default Nav;
