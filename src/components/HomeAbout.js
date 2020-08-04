import React from "react";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const HomeAbout = () => {
  const handleScroll = () =>
    window.scroll({
      top: window.scrollY + 600,
      left: 0,
      behavior: "smooth",
    });
  return (
    <>
      <div className="home__about__title">
        <h1>Kuchnia na obcasach</h1>
      </div>
      <p className="home__about__text">
        Kuchnia na Obcasach to blog kulinarny z przepisami na smaczne, zdrowie i
        sezonowe potrawy. Znajdziecie tu zbiór na klasyczne dania, przepisy z
        nutką nowoczesności, a także potrawy dietetyczne, dla osób zdrowo
        odżywiających się i będących fit, a osoby, które dopiero zaczynają swoją
        przygodę z gotowaniem na pewno znajdą tutaj wiele ciekawych inspiracji i
        porad kulinarnych. Serdecznie zapraszam do korzystania i próbowania
        przepisów.
      </p>
      <button className="home__about__button" onClick={handleScroll}>Znajdź coś dla siebie!</button>
    </>
  );
};

export default HomeAbout;
