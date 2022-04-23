import { useState } from "react";

import { Link } from "gatsby";

import Hamburger from "./Hamburger";
import NavMenu from "./NavMenu";

import logo from "../assets/img/logo-red.png";

import { header, link, img } from "./MainHeader.module.css";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={header}>
      <Link className={link} to="/">
        <img className={img} src={logo} alt="" />
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <NavMenu />}
    </header>
  );
};

export default MainHeader;
