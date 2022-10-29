import { List } from "../../ui/List";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-icon.svg";
import { ReactComponent as WhatsappLogo } from "../../../assets/icons/whatsapp-logo.svg";
import { ReactComponent as TelegramLogo } from "../../../assets/icons/telegram-logo.svg";

import styles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.background}>
      <div className={styles.root}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.listContainer}>
          <List
            className={styles.list}
            title="Услуги"
            list={[
              { title: "Support and development", link: "/#" },
              { title: "UI/UX and product design", link: "/#" },
              { title: "Progressive Web Applications (PWA)", link: "/#" },
            ]}
          />
          <List
            className={styles.list}
            title="Компания"
            list={[
              { title: "О компании", link: "/#" },
              { title: "Проекты", link: "/#" },
              { title: "Контакты", link: "/#" },
            ]}
          />
          <div className={styles.messengersContainer}>
            <List
              className={styles.list}
              title="Контакты"
              list={[
                {
                  title: (
                    <>
                      Скачать презентацию <ArrowIcon />
                    </>
                  ),
                  link: "/#",
                },
                {
                  title: "+7 (499) 999-99-99",
                  link: "tel:+74999999999",
                  className: "phoneNumber",
                },
                { title: "info@site.com", link: "mailto:info@site.com" },
              ]}
            />
            <div className={styles.messengersBlock}>
              <a href="/#">
                <WhatsappLogo />
              </a>
              <a href="/#">
                <TelegramLogo />
              </a>
            </div>
          </div>
        </div>
        <List
          className={styles.copyright}
          list={[
            { title: "Политика конфиденциальности", link: "/#" },
            { title: "© Company 2022. All rights reserved." },
          ]}
        />
      </div>
    </footer>
  );
};
