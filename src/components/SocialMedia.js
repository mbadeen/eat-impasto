import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import SnapchatIcon from "./SnapchatIcon";
import YelpIcon from "./YelpIcon";

import { section } from "./SocialMedia.module.css";

const SocialMedia = () => (
  <section className={section}>
    <a
      href="https://www.facebook.com/impastotampa/"
      rel="noreferrer"
      target="_blank"
    >
      <FacebookIcon />
    </a>
    <a
      href="https://www.snapchat.com/add/eatimpasto"
      rel="noreferrer"
      target="_blank"
    >
      <SnapchatIcon />
    </a>

    <a
      href="https://www.instagram.com/impastotampa"
      rel="noreferrer"
      target="_blank"
    >
      <InstagramIcon />
    </a>
    <a
      href="https://www.yelp.com/biz/impasto-italian-inspired-wraps-detroit"
      rel="noreferrer"
      target="_blank"
    >
      <YelpIcon />
    </a>
  </section>
);

export default SocialMedia;
