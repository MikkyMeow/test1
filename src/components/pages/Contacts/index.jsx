import { Footer } from "../../elements/Footer";
import { Nav } from "../../elements/Nav";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { Input } from "../../ui/input";
import { Checkbox } from "../../ui/Checkbox";
import styles from "./index.module.css";
import { SubmitButton } from "../../ui/SubmitButton";

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
        <form className={styles.form}>
          <div>
            <div className={styles.inputContainer}>
              <Input className={styles.input} label="Ваше имя" />
              <Input className={styles.input} label="Ваш e-mail" />
            </div>
            <Input className={styles.input} label="Комментарий" />
            <Checkbox
              type="checkbox"
              label={
                <>
                  Согласен <a href="/#">политикой конфиденциальности</a>
                </>
              }
            />
          </div>
          <SubmitButton />
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
