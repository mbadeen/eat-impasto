import logo from "../assets/img/logo-red.png";

import Container from "./Container";

import { section, img } from "./WelcomeSection.module.css";

const WelcomeSection = () => (
  <section className={section}>
    <Container>
      {/* <header>
			TODO: Add h1 class back in import if used
        <h1 className={h1}>Welcome!</h1>
      </header> */}
      <article>
        <p>
          Welcome! The Italian term <q>Impasto</q> translates in English to
          <q>Dough</q>. We chose this name because we at Impasto take our dough
          seriously! What makes our dough so special? All our dough is made
          in-house to make sure your Impasto wrap tastes delicious every time!
          It's naturally fermented with wild yeast which creates a delicious,
          unique flavor you will not find elsewhere.
        </p>
        <p>
          Every Impasto is 'Griddled' to a fluffy, golden brown crust, 'Stuffed'
          with the freshest, local ingredients and 'Rolled' into perfection!
        </p>
      </article>
      <footer>
        <img className={img} src={logo} alt="" />
      </footer>
    </Container>
  </section>
);

export default WelcomeSection;
