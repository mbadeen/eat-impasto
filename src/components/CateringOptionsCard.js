import PropTypes from "prop-types";

import Card from "./Card";
import List from "./List";

import { header, h3 } from "./CateringOptionsCard.module.css";

const CateringOptionsCard = ({ title, options }) => (
  <Card>
    <header className={header}>
      <h3 className={h3}>{title}</h3>
    </header>
    <List items={options} />
  </Card>
);

CateringOptionsCard.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default CateringOptionsCard;
