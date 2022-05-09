import { article, header, h3, ul, li } from "./Options.module.css";

const Options = ({ title, listOptions }) => (
  <article className={article}>
    <header className={header}>
      <h3 className={h3}>{title}</h3>
    </header>
    <ul className={ul}>
      {listOptions.map((option) => (
        <li className={li}>{option}</li>
      ))}
    </ul>
  </article>
);

export default Options;
