import { arrayOf, shape, string } from "prop-types";
import { container, dd, dl, dt } from "./Faq.module.css";

const Faq = ({ questions }) => (
  <dl className={dl}>
    {questions.map(({ question, answer }) => (
      <div className={container}>
        <dt className={dt}>{question}</dt>
        <dd className={dd}>{answer}</dd>
      </div>
    ))}
  </dl>
);

Faq.propTypes = {
  questions: arrayOf(
    shape({
      question: string,
      answer: string,
    })
  ),
};

export default Faq;
