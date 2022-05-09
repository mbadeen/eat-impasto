import Layout from "../components/Layout";
import Options from "../components/options";

import {
  section,
  article,
  options_container,
  // truck_rental_container,
} from "./catering.module.css";

const Catering = () => {
  const baseOptions = [
    "1 Wrap (choose from 3 options)",
    "1 Parmesan Truffle Fries",
  ];

  return (
    <Layout pageTitle="Impasto Catering">
      <section className={section}>
        <article className={article}>
          <h1>Catering</h1>
          <p>
            Here are some of our most popular packages. To see all of our menu
            and package options, please contact us.
          </p>
        </article>
        <div className={options_container}>
          <Options title="Good" listOptions={baseOptions} />
          <Options title="Better" listOptions={[...baseOptions, "1 Drink"]} />
          <Options
            title="Best"
            listOptions={[...baseOptions, "1 House-Made Cannoli", "1 Drink"]}
          />
        </div>
        {/* <article className={article}>
          <h2>Rent the Truck!</h2>
          <p>
            Take your event to another level and rent the Impasto truck!
            Customize your menu with one of our popular packages.
          </p>
        </article> */}
        {/* <div className={truck_rental_container}>
          <Options
            title="Truck Pricing"
            listOptions={[
              "$1200 food and beverage minimum required.",
              "$350 for the first two hours.",
              "$175 per hour after.",
            ]}
          />
        </div> */}
      </section>
    </Layout>
  );
};

export default Catering;
