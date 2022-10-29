import { Footer } from "../../elements/Footer";
import { Nav } from "../../elements/Nav";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import styles from "./index.module.css";

const Contacts = () => {
  return (
    <div>
      <Nav />
      <Breadcrumbs />
      <section className={styles.root}>
        <h1 className={styles.title}>Мы рядом</h1>
        <p className={styles.description}>
          Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите
          нам на почту <a href="mailto:info@site.com">info@site.com</a>
        </p>
        <form>
          <input placeholder="Ваше имя" />
          <input placeholder="Ваш e-mail" />
          <input placeholder="Комментарий" />
          <input
            type="checkbox"
            placeholder="Согласен с политикой конфиденциальности"
          />
          <button>Отправить</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
