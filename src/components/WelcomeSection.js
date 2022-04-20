import logo from "../assets/img/logo-red.png";

import Container from "./Container";

import { section, img, h1 } from "./WelcomeSection.module.css";

const WelcomeSection = () => (
  <Container>
    <section className={section}>
      <header>
        <h1 className={h1}>Welcome to Impasto!</h1>
      </header>
      <article>
        <p>
          The Italian term 'Impasto' translates in English to 'Dough'. We chose
          this name because we at Impasto take our dough very seriously! What
          makes our dough so special? All our dough is made in-house to make
          sure your Impasto wrap tastes delicious every time! It's naturally
          fermented with wild yeast which creates a delicious, unique flavor not
          replicated anywhere else.
        </p>
        <p>
          Every Impasto is 'Griddled' to a fluffy, golden brown crust, 'Stuffed'
          with the freshest, local ingredients and 'Rolled' into perfection!
        </p>
      </article>
      <footer>
        <img className={img} src={logo} alt="" />
      </footer>
    </section>
  </Container>
);

export default WelcomeSection;
