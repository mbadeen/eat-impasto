import VisualNav from "./VisualNav";

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
          What makes our dough so special? All our dough is made in-house to
          make sure your Impasto wrap tastes delicious every time! It's
          naturally fermented with wild yeast which creates a delicious, unique
          flavor you will not find elsewhere.
        </p>
      </article>
      <VisualNav
        to="/events"
        // title="Events"
        imgSrc={GrilledChicken}
        caption="Check out where we will roll up next!"
      />
    </section>
    <section className={section}>
      <VisualNav
        to="/menu"
        // title="Menu"
        imgSrc={Meatball}
        caption="Check out our Menu!"
      />
      <article className={article}>
        <p className={p}>
          Every Impasto is 'Griddled' to a fluffy, golden brown crust, 'Stuffed'
          with the freshest, local ingredients and 'Rolled' into perfection!
        </p>
      </article>
    </section>
    <section className={section}>
      <article className={article}>
        <p className={p}>
          Find our Impasto Food truck rolling through Detroit or rent our food
          truck for your next big event!
        </p>
      </article>
      <VisualNav
        to="/catering"
        // title="Catering"
        imgSrc={Spread}
        caption="Take your event to another level and rent the Impasto Truck!"
      />
    </section>
  </>
);

export default HomeTemplate;
