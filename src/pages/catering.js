import { Link } from "gatsby";

import Article from "../components/Article";
import Layout from "../components/Layout";
import CateringOptionsSection from "../components/CateringOptionsSection";
import TruckRentalSection from "../components/TruckRentalSection";

import { section, anchor } from "./catering.module.css";

const Catering = () => (
  <Layout pageTitle="Impasto Catering">
    <section className={section}>
      <Article>
        <h1>Catering</h1>
        <p>
          Here are some of our most popular packages. To see all of our menu and
          package options, please{" "}
          <Link className={anchor} to="/contact">
            contact
          </Link>{" "}
          us.
        </p>
      </Article>
      <CateringOptionsSection />
      <TruckRentalSection />
    </section>
  </Layout>
);

export default Catering;
