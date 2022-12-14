import styles from "./index.module.css";

export const Input = ({ className = "", label, ...rest }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      <input className={styles.input} placeholder=" " {...rest} />
      <label className={styles.label}>
        {label}
        {rest.required && <span className={styles.required}> *</span>}
      </label>
    </div>
  );
};
