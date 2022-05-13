import PropTypes from "prop-types";

import { article } from "./Article.module.css";

const Article = ({ children }) => (
  <article className={article}>{children}</article>
);

Article.propTypes = {
  children: PropTypes.node,
};

export default Article;
