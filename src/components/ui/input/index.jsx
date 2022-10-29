import styles from "./index.module.css";

export const Input = ({ className = "", label, ...rest }) => {
  // TODO: Добавить required
  return (
    <div className={`${styles.root} ${className}`}>
      <input className={styles.input} placeholder=" " {...rest} />
      <label className={styles.label}>{label}</label>
    </div>
  );
};
