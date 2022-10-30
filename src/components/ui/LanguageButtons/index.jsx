import React, { useState } from "react";
import styles from "./index.module.css";

export const LanguageButtons = () => {
  const [language, setLanguage] = useState("RU");
  const languages = ["RU", "EN"];

  return (
    <div className={styles.root}>
      {languages.map((lang) => (
        <button
          key={lang}
          className={`${styles.btn} ${lang === language && "active"}`}
          onClick={() => setLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
