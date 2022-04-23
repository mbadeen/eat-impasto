import PropTypes from "prop-types";

import { button, span } from "./Hamburger.module.css";

const Hamburger = ({ onClick }) => (
  <button className={button} onClick={onClick} type="button">
    <span className={span} />
    <span className={span} />
    <span className={span} />
  </button>
);

Hamburger.propTypes = {
  onClick: PropTypes.func,
};

export default Hamburger;
