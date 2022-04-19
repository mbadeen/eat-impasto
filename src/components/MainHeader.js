// import Container from "./Container";
import Nav from "./Nav";
import logo from "../assets/img/brandmark_red.png";

import { header, img } from "./MainHeader.module.css";

const MainHeader = () => (
  <header className={header}>
    <img className={img} src={logo} alt="" />
    <Nav />
  </header>
);

export default MainHeader;
