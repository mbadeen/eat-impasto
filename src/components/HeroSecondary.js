import Container from "./Container";

import Banner from "../assets/img/impasto-white.png";
import Logo from "../assets/img/logo-red.png";

import { header, figure, img, logo_red } from "./HeroSecondary.module.css";

const HeroSecondary = () => (
  <header className={header}>
    <Container>
      <img className={img} src={Banner} alt="Impasto Italian Inspired Wraps" />
    </Container>
    <img className={logo_red} src={Logo} alt="" />
  </header>
);

export default HeroSecondary;
