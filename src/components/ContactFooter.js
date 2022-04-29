import SocialMedia from "./SocialMedia";

import { footer, anchor } from "./ContactFooter.module.css";

const ContactFooter = () => (
  <footer className={footer}>
    <a className={anchor} href="tel:1-313-800-1134">
      (313) 800-1134
    </a>
    <SocialMedia />
  </footer>
);

export default ContactFooter;
