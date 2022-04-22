import { Link } from "gatsby";

import Nav from "./Nav";
import logo from "../assets/img/logo-red.png";

import { header, link, img } from "./MainHeader.module.css";

const MainHeader = () => (
  <header className={header}>
    <Link className={link} to="/">
      <img className={img} src={logo} alt="" />
    </Link>
    <Nav />
  </header>
);

export default MainHeader;
