import CateringOptionsCard from "./CateringOptionsCard";

import { section } from "./CateringOptionsSection.module.css";

const CateringOptionsSection = () => {
  const baseOptions = [
    "1 Wrap (choose from 3 options)",
    "1 Parmesan Truffle Fries",
  ];

  const cards = [
    {
      title: "Good",
      options: baseOptions,
    },
    {
      title: "Better",
      options: [...baseOptions, "1 Drink"],
    },
    {
      title: "Best",
      options: [...baseOptions, "1 House-Made Cannoli", "1 Drink"],
    },
  ];

  return (
    <section className={section}>
      {cards.map(({ title, options }) => (
        <CateringOptionsCard title={title} options={options} />
      ))}
    </section>
  );
};

export default CateringOptionsSection;
