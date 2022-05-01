import VisualNav from "./VisualNav";
import HeadingList from "./HeadingList";

import GrilledChicken from "../assets/img/grilled-chicken.jpg";
import Meatball from "../assets/img/meatball.jpg";
import Spread from "../assets/img/flatlay.jpg";

import { section, article, h1, p } from "./HomeTemplate.module.css";

const HomeTemplate = () => (
  <>
    <section className={section}>
      <article className={article}>
        <h1 className={h1}>Welcome</h1>
        <p className={p}>
          The Italian term <q>Impasto</q> translates in English to <q>Dough</q>.
          All our dough is made in-house and naturally fermented with wild yeast
          which creates a delicious, unique flavor you will not find elsewhere.
        </p>
      </article>
      <VisualNav
        to="/events"
        imgSrc={GrilledChicken}
        caption="Check out where we will roll up next!"
      />
    </section>
    <section className={section}>
      <VisualNav to="/menu" imgSrc={Meatball} caption="Check out our Menu!" />
      <article className={article}>
        <HeadingList listItems={["Griddled", "Stuffed", "Rolled"]} />
        <p className={p}>
          Every Impasto is 'Griddled' to a fluffy, golden brown crust, 'Stuffed'
          with the freshest, local ingredients and 'Rolled' into perfection!
        </p>
      </article>
    </section>
    <section className={section}>
      <article className={article}>
        <HeadingList listItems={["Bite", "Wow", "Ciao"]} />
        <p className={p}>
          Find our Impasto Food truck rolling through Detroit or Tampa and have
          a bite with us!
        </p>
      </article>
      <VisualNav
        to="/catering"
        imgSrc={Spread}
        caption="Rent our Impasto Truck for your next event!"
      />
    </section>
  </>
);

export default HomeTemplate;
