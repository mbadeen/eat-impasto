import TruckRentalArticle from "./TruckRentalArticle";

import Italibono from "../assets/img/italibono.jpeg";

import { section } from "./TruckRentalSection.module.css";

const TruckRentalSection = () => (
  <section className={section}>
    <TruckRentalArticle />
    <img src={Italibono} alt="" />
  </section>
);

export default TruckRentalSection;
