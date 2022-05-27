import { node } from "prop-types";

import { article } from "./Card.module.css";

const Card = ({ children }) => (
  <article className={article}>{children}</article>
);

Card.propTypes = {
  children: node,
};

export default Card;
