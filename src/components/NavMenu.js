import PropTypes from "prop-types";

import Nav from "./Nav";
import ContactFooter from "./ContactFooter";

import { container, open, close } from "./NavMenu.module.css";

const NavMenu = ({ isOpen }) => (
  <div className={[container, isOpen ? open : close].join(" ")}>
    <Nav />
    <ContactFooter />
  </div>
);

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default NavMenu;
