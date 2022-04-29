import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
// import SnapchatIcon from './SnapchatIcon';
import YelpIcon from "./YelpIcon";

import { section } from "./SocialMedia.module.css";

const SocialMedia = () => (
  <section className={section}>
    <a href="https://www.facebook.com/impastotampa/" target="_blank">
      <FacebookIcon />
    </a>
    {/* <SnapchatIcon /> */}
    <a href="https://www.instagram.com/impastotampa" target="_blank">
      <InstagramIcon />
    </a>
    <a
      href="https://www.yelp.com/biz/impasto-italian-inspired-wraps-detroit"
      target="_blank"
    >
      <YelpIcon />
    </a>
  </section>
);

export default SocialMedia;
