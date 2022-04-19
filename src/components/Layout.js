import PropTypes from "prop-types";

import MainHeader from "./MainHeader";
import Container from "./Container";

const Layout = ({ pageTitle, children }) => (
  <>
    <MainHeader />
    <Container>
      <title>{pageTitle}</title>
      <main>{children}</main>
    </Container>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Layout;
