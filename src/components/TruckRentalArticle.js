import List from "./List";

import { article } from "./TruckRentalArticle.module.css";

const TruckRentalArticle = () => (
  <article className={article}>
    <header>
      <h2>Rent the Truck!</h2>
      <p>
        Take your event to another level and rent the Impasto truck! Customize
        your menu with one of our popular packages.
      </p>
    </header>
    <List
      items={[
        "$1200 food and beverage minimum required.",
        "$350 for the first two hours.",
        "$175 per hour after.",
      ]}
    />
  </article>
);

export default TruckRentalArticle;
