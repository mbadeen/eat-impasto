import PropTypes from "prop-types";

import { article } from "./Card.module.css";

const Card = ({ children }) => (
  <article className={article}>{children}</article>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
