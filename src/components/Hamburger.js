import PropTypes from "prop-types";

import {
  button,
  span,
  topOpen,
  bottomOpen,
  topClose,
  bottomClose,
} from "./Hamburger.module.css";

const Hamburger = ({ isOpen, onClick }) => (
  <button className={button} onClick={onClick} type="button">
    <span className={[span, isOpen ? topOpen : topClose].join(" ")} />
    <span className={[span, isOpen ? bottomOpen : bottomClose].join(" ")} />
  </button>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Hamburger;
