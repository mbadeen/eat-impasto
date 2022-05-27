import { arrayOf, string } from "prop-types";

import { ul, li } from "./List.module.css";

const List = ({ items }) => (
  <ul className={ul}>
    {items.map((item) => (
      <li className={li}>{item}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: arrayOf(string),
};

export default List;
