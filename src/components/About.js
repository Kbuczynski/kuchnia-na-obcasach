import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <main className="about">
      <section className="about__container">
        <div className="about__container__left">
          <h3 className="about__container__left__title">O mnie</h3>
          <p className="about__container__left__paragraph">
            Mam na imię Monika i jestem autorką bloga kulinarnego Kuchnia na
            Obcasach od stycznia 2012 r. Gotowanie to nie tylko moja pasja,
            zamiłowanie, choć zawodowo zajmuję się zupełnie czymś innym.
            Gotowanie dla mnie to okazja do wspólnych posiłków z rodziną,
            podczas których spędzamy razem czas i rozmawiamy. Kucharzenie dla
            najbliższych to moja filozofia życiowa, bo wiem co podaję mojej
            rodzinie.
          </p>
          <p className="about__container__left__paragraph">
            Z domu rodzinnego pamiętam wiele potraw i smaków, które przemycam w
            moich przepisach. Inspiracją są także dla mnie kuchnia włoska,
            grecka (i wiele innych), ale także nasza rodzima polska kuchnia.
            Zaczęłam gotować już w wieku szkolnym. Pamiętam swoją pierwszą
            samodzielną potrawę, był nią gulasz wieprzowy, który miała
            przygotować mama, ale ja mając wakacje i wiedząc, że mama przyjdzie
            zmęczona z pracy, postanowiłam sama go zrobić. Jakież było
            zdziwienie mamy, która nie dowierzała, że to ja - 11-letnia
            dziewczynka ugotowałam taki pyszny gulasz. Tak się zaczęła moja
            przygoda...
          </p>
          <p className="about__container__left__paragraph">
            Lubię eksperymentować w kuchni, bo gotowanie to moja pasja.
            Uwielbiam smacznie gotować, szybko i niebanalnie, ale przede
            wszystkim lubię dekorować potrawy i ładnie je eksponować na talerzu
            - w myśl zasady, że jemy oczami. Mam nadzieję, że moje pomysły na
            codzienne dania będą dla Was inspiracją do tworzenia cudów w kuchni.
          </p>
          <p className="about__container__left__paragraph">
            Moimi pasjami są także: wyszywanie, dzierganie, szydełkowanie i
            takie robótki ręczne, na które aktualnie nie mam czasu, ale
            chciałabym nadrobić ten czas. Pewnie nastąpi to dopiero na
            emeryturze...hmm.
          </p>
          <p className="about__container__left__paragraph">
            Moją pasją jest także fotografia, którą staram się zgłębiać.
          </p>
          <p className="about__container__left__paragraph">
            Jestem nie tylko blogującą "kucharką", ale mamą Mateusza i żoną
            Huberta. Zawodowo związana jestem z wymiarem sprawiedliwości, a
            dokładniej z sądownictwem. Ukończyłam studia administracyjne.
          </p>
          <p className="about__container__left__paragraph">
            Można do mnie napisać na adres{" "}
            <a href="mailto:monika.kuchnianaobcasach@gmail.com">monika.kuchnianaobcasach@gmail.com</a>
          </p>
        </div>
        <div className="about__container__right">
          <img src={aboutImg} alt="Monika Siniło" />
        </div>
      </section>
    </main>
  );
};

export default About;
