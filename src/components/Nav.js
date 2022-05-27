import { Link } from "gatsby";

import { link, link_active, nav } from "./Nav.module.css";

const Nav = () => {
  const links = [
    { href: "/events", label: "Events" },
    { href: "/menu", label: "Menu" },
    { href: "/catering", label: "Catering" },
    { href: "/faqs", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={nav}>
      {links.map(({ href, label }) => (
        <Link
          activeClassName={link_active}
          className={link}
          to={href}
          key={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
