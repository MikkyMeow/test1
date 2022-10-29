import styles from "./index.module.css";

export const Checkbox = ({ label, ...rest }) => {
  return (
    <label className={styles.root}>
      <input className={styles.checkbox} type="checkbox" {...rest} />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
