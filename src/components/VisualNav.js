import { string } from "prop-types";
import { Link } from "gatsby";

import { anchor, img, overlay, p } from "./VisualNav.module.css";

const VisualNav = ({ caption, imgSrc, to }) => (
  <Link className={anchor} to={to}>
    <img className={img} src={imgSrc} alt="" />
    <div className={overlay}>
      <p className={p}>{caption}</p>
    </div>
  </Link>
);

VisualNav.propTypes = {
  caption: string,
  imgSrc: string,
  to: string,
};

export default VisualNav;
