import styles from "./index.module.css";

export const List = ({ className = "", title, list }) => {
  return (
    <div className={`${styles.root} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul>
        {list.map(({ title, link, className }, index) => (
          <li
            className={`${styles.item} ${className ? className : ""}`}
            key={index}
          >
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
