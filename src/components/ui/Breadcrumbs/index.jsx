import React from "react";
import styles from "./index.module.css";

export const Breadcrumbs = () => {
  // TODO: Подключить роутинг
  return (
    <div className={styles.root}>
      Главная - <b>Контакты</b>
    </div>
  );
};