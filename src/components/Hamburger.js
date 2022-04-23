import PropTypes from "prop-types";

import { button, span, top, middle, bottom } from "./Hamburger.module.css";

const Hamburger = ({ isOpen, onClick }) => (
  <button className={button} onClick={onClick} type="button">
    <span className={[span, isOpen ? top : null].join(" ")} />
    <span className={[span, isOpen ? middle : null].join(" ")} />
    <span className={[span, isOpen ? bottom : null].join(" ")} />
  </button>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
