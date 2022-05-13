import Article from "../components/Article";
import Layout from "../components/Layout";
import VisualNavExternal from "../components/VisualNavExternal";

import GrilledChicken from "../assets/img/grilled-chicken.jpg";
import Meatball from "../assets/img/meatball.jpg";

import { section, p, nav_container } from "./events.module.css";

const Events = () => (
  <Layout pageTitle="Impasto Events">
    <section className={section}>
      <Article>
        <h1>Upcoming Events</h1>
        <p className={p}>
          Please choose a location to see where we are rolling up next!
        </p>
      </Article>
      <div className={nav_container}>
        <VisualNavExternal
          caption="Detroit, Michigan"
          imgSrc={GrilledChicken}
          to="https://www.facebook.com/pg/eatimpasto/events/?ref=page_internal"
        />
        <VisualNavExternal
          caption="Tampa, Florida"
          imgSrc={Meatball}
          to="https://www.facebook.com/pg/impastotampa/events/"
        />
      </div>
    </section>
  </Layout>
);

export default Events;
