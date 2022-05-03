import PropTypes from "prop-types";
import { anchor, img, overlay, p } from "./VisualNav.module.css";

const VisualNavExternal = ({ caption, imgSrc, to }) => (
  <a className={anchor} href={to} rel="noreferrer" target="_blank">
    <img className={img} src={imgSrc} alt="" />
    <div className={overlay}>
      <p className={p}>{caption}</p>
    </div>
  </a>
);

VisualNavExternal.propTypes = {
  caption: PropTypes.string,
  imgSrc: PropTypes.string,
  to: PropTypes.string,
};

export default VisualNavExternal;
