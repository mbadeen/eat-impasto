import Nav from "./Nav";
import logo from "../assets/img/logo-red.png";

import { header, img } from "./MainHeader.module.css";

const MainHeader = () => (
  <header className={header}>
    <img className={img} src={logo} alt="" />
    <Nav />
  </header>
);

export default MainHeader;
