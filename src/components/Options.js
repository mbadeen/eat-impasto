import { article, header, ul, li } from "./Options.module.css";

const Options = ({ title, listOptions }) => (
  <article className={article}>
    <header className={header}>
      <h2>{title}</h2>
    </header>
    <ul className={ul}>
      {listOptions.map((option) => (
        <li className={li}>{option}</li>
      ))}
    </ul>
  </article>
);

export default Options;
