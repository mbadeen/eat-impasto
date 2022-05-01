import Contact from "./Contact";

import SignatureWhite from "../assets/img/signature-white.png";

import { footer, img } from "./MainFooter.module.css";

const MainFooter = () => (
  <footer className={footer}>
    <img className={img} src={SignatureWhite} alt="" />
    <Contact />
  </footer>
);

export default MainFooter;
