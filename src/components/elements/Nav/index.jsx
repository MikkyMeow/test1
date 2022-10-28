import { useState } from "react";
import { LanguageButtons } from "../../ui/LanguageButtons";
import styles from "./index.module.css";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className={styles.root}>
      <span className={styles.logo}>LOGO</span>
      <button
        className={styles.menuBtn}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      {/* <div className={`${styles.content} ${!isMenuOpen ? "show" : ""}`}> */}
      <nav>
        <ul className={`${styles.list} ${isMenuOpen ? "show" : ""}`}>
          <li>Проекты</li>
          <li>О компании</li>
          <li className="active">Контакты</li>
        </ul>
      </nav>
      <div className={`${styles.languages} ${isMenuOpen ? "show" : ""}`}>
        <LanguageButtons />
      </div>
      <button className={`${styles.startBtn} ${isMenuOpen ? "show" : ""}`}>
        Начать проект &#8594;
      </button>
    </div>
  );
};
