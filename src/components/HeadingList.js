import { arrayOf, string } from "prop-types";

import { ul, li } from "./HeadingList.module.css";

const HeadingList = ({ listItems }) => (
  <ul className={ul}>
    {listItems.map((item) => (
      <li className={li}>{item}</li>
    ))}
  </ul>
);

HeadingList.propTypes = {
  listItems: arrayOf(string),
};

export default HeadingList;
