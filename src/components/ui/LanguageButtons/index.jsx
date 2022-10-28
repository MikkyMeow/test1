import styles from "./index.module.css";

export const LanguageButtons = () => {
  return (
    <div className={styles.root}>
      <button className={`${styles.btn} active`}>RU</button>
      <button className={`${styles.btn}`}>EN</button>
    </div>
  );
};
