import PropTypes from "prop-types";
import { Link } from "gatsby";

import { anchor, img, overlay, p } from "./VisualNav.module.css";

const VisualNav = ({ caption, imgSrc, to }) => (
  // <figure className={figure}>
  <Link className={anchor} to={to}>
    <img className={img} src={imgSrc} alt="" />
    <div className={overlay}>
      {/* <h2 className={h2}>{title}</h2> */}
      <p className={p}>{caption}</p>
    </div>
  </Link>
  // </figure>
);

VisualNav.propTypes = {
  caption: PropTypes.string,
  imgSrc: PropTypes.string,
  // title: PropTypes.string,
  to: PropTypes.string,
};

export default VisualNav;
