import { Footer } from "../../elements/Footer";
import { Nav } from "../../elements/Nav";
import { Bread } from "../../ui/Bread";

const Contacts = () => {
  return (
    <div>
      <Nav />
      <Bread />
      <h1>Мы рядом</h1>
      <p>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам
        на почту <a>info@site.com</a>
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
      <Footer />
    </div>
  );
};

export default Contacts;
