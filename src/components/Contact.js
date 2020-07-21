import React from "react";
import bigActive from "../assets/companies/BIG-ACTIVE.jpg";
import fitEasy from "../assets/companies/FIT_EASY.jpg";
import helio from "../assets/companies/HELIO.jpg";
import jacobs from "../assets/companies/JACOBS.jpg";
import kupiec from "../assets/companies/KUPIEC.jpg";
import lidl from "../assets/companies/LIDL.jpg";
import limini from "../assets/companies/LIMINI.jpg";
import nestle from "../assets/companies/NESTLE.jpg";
import ponti from "../assets/companies/PONTI.jpg";
import richmont from "../assets/companies/RICHMONT.jpg";

const logos = [
  {
    name: "BigActive",
    img: bigActive,
  },
  {
    name: "Fit & Easy",
    img: fitEasy,
  },
  {
    name: "Helio",
    img: helio,
  },
  {
    name: "Jacobs",
    img: jacobs,
  },
  {
    name: "Kupiec 1987",
    img: kupiec,
  },
  {
    name: "Limmi",
    img: limini,
  },
  {
    name: "Nestle",
    img: nestle,
  },
  {
    name: "Ponti",
    img: ponti,
  },
  {
    name: "RichMont",
    img: richmont,
  },
  {
    name: "Lidl",
    img: lidl,
  },
];

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__container">
        <div className="contact__container__left">
          <h3 className="contact__container__left__title">
            Kontakt i współpraca
          </h3>
          <p className="contact__container__left__paragraph">
            Witam serdecznie!
          </p>
          <p className="contact__container__left__paragraph">
            Dziękuję za zainteresowanie moim blogiem. Osoby zainteresowane
            współpracą proszę o kontakt mailowy na adres{" "}
            <a href="mailto:monika.kuchnianaobcasach@gmail.com">monika.kuchnianaobcasach@gmail.com</a>
          </p>
          <p className="contact__container__left__paragraph">
            Jestem otwarta na wszelkie propozycje, chętnie odpowiem na każdą
            wiadomość, służę pomocą i poradą - nie tylko kulinarną.
          </p>
          <p className="contact__container__left__paragraph">
            Podejmę współpracę w zakresie:
          </p>
          <ul className="contact__container__left__list">
            <li className="contact__container__left__list__item">
              przygotowania sesji fotograficznej,
            </li>
            <li className="contact__container__left__list__item">
              przygotowania indywidualnych przepisów ze zdjęciami dla firm i
              prasy,
            </li>
            <li className="contact__container__left__list__item">
              organizowania konkursów dla czytelników bloga,
            </li>
            <li className="contact__container__left__list__item">
              przepisów z lokowaniem produktów,
            </li>
            <li className="contact__container__left__list__item">reklamy</li>
          </ul>
          <p className="contact__container__left__paragraph">
            Pozdrawiam serdecznie i zapraszam.
          </p>
        </div>
        <div className="contact__container__right">
          <h3 className="contact__container__left__title">
            Podejmowałam współpracę m.in. z
          </h3>
          <div className="contact__container__right__companies">
            {logos.map(({ name, img }, index) => (
              <img
                key={index}
                src={img}
                alt={name}
                className="contact__container__right__companies__item"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
