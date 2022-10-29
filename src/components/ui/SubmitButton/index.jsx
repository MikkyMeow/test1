import { ReactComponent as SubmitBorder } from "./../../../assets/icons/submit-border.svg";
import { ReactComponent as PlaneIcon } from "./../../../assets/icons/plane-icon.svg";
import styles from "./index.module.css";

export const SubmitButton = () => {
  return (
    <button type="submit" className={styles.root}>
      <SubmitBorder />
      <span className={styles.plane}>
        <PlaneIcon />
      </span>
      <span className={styles.label}>Отправить</span>
    </button>
  );
};
