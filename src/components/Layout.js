import PropTypes from "prop-types";

import Hero from "./Hero";
import HeroSecondary from "./HeroSecondary";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

import { main } from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => (
  <>
    <title>{pageTitle}</title>
    <MainHeader />
    <main className={main}>
      {/* {pageTitle === "Impasto" ? <Hero /> : <HeroSecondary />}
       */}
      <HeroSecondary />
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
