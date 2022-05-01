import PropTypes from "prop-types";

import Nav from "./Nav";
import Contact from "./Contact";

import { container, open, close } from "./NavMenu.module.css";

const NavMenu = ({ isOpen }) => (
  <div className={[container, isOpen ? open : close].join(" ")}>
    <Nav />
    <Contact />
  </div>
);

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default NavMenu;
