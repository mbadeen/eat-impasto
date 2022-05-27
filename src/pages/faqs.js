import { Link } from "gatsby";

import Article from "../components/Article";
import Faq from "../components/Faq";
import Layout from "../components/Layout";

import { anchor, section } from "./faqs.module.css";

const Faqs = () => (
  <Layout pageTitle="Impasto FAQ">
    <section className={section}>
      <Article>
        <h1>Frequently Asked Questions</h1>
        <p>
          Have questions? Checkout some of our FAQs below and please{" "}
          <Link className={anchor} to="/contact">
            contact
          </Link>{" "}
          us if you do not find the information you are looking for!
        </p>
      </Article>
      <Faq
        questions={[
          {
            question: "What does “Impasto” mean?",
            answer:
              "The Italian term “Impasto” translates into English as “Dough”",
          },
          {
            question: "Can I rent the truck?",
            answer:
              "Absolutely! Please visit our catering page for more information",
          },
          {
            question: "What are the dimensions of your truck?",
            answer: "25ft x 7.5ft",
          },
          {
            question: "Do you offer pick-up catering?",
            answer: "Yes!",
          },
          {
            question: "Do you offer gluten free options?",
            answer: "Gluten free option will be available soon!",
          },
          {
            question: "Do you offer dairy free options?",
            answer: "Any Impasto can be made dairy free upon request!",
          },
          {
            question: "Do you offer online ordering?",
            answer: "Coming soon!",
          },
          {
            question: "What forms of payment do you accept?",
            answer: "We accept all forms of payment!",
          },
        ]}
      />
    </section>
  </Layout>
);

export default Faqs;
