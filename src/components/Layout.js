import PropTypes from "prop-types";

import Hero from "./Hero";
import MainHeader from "./MainHeader";

const Layout = ({ pageTitle, children }) => (
  <>
    <title>{pageTitle}</title>
    <MainHeader />
    <main>
      <Hero />
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
