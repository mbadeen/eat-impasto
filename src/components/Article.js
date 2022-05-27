import { node } from "prop-types";

import { article } from "./Article.module.css";

const Article = ({ children }) => (
  <article className={article}>{children}</article>
);

Article.propTypes = {
  children: node,
};

export default Article;
