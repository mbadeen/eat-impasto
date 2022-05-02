import PropTypes from "prop-types";

import Hero from "./Hero";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

import { main } from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => (
  <>
    <title>{pageTitle}</title>
    <MainHeader />
    <main className={main}>
      <Hero />
      {children}
    </main>
    <MainFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
