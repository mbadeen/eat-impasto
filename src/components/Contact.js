import SocialMedia from "./SocialMedia";

import { section, anchor } from "./Contact.module.css";

const Contact = () => (
  <section className={section}>
    <a className={anchor} href="tel:1-313-800-1134">
      (313) 800-1134
    </a>
    <SocialMedia />
  </section>
);

export default Contact;
