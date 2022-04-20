import banner from "../assets/img/Impasto_Logotype_white.png";
import logo from "../assets/img/logo-red.png";

import Container from "./Container";

import { header, img, logo_red } from "./Hero.module.css";

const Hero = () => (
  <header className={header}>
    <figure>
      <Container>
        <img
          className={img}
          src={banner}
          alt="Impasto Italian Inspired Wraps"
        />
        <img className={logo_red} src={logo} alt="" />
      </Container>
    </figure>
  </header>
);

export default Hero;
