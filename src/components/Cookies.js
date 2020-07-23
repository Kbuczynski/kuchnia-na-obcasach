import React from "react";

const Cookies = () => {
  return (
    <section className="cookies">
    <div className="cookies__container">
      <h3 className="cookies__container__title">POLITYKA PLIKÓW COOKIES</h3>
      <p className="cookies__container__paragraph">
        Opisana polityka cookies odnosi się do bloga kuchnianaobcasach.com.pl
      </p>
      <p className="cookies__container__paragraph">
        Ciasteczka (ang. cookies) – niewielkie informacje tekstowe, wysyłane
        przez serwer WWW i zapisywane po stronie użytkownika (zazwyczaj na
        twardym dysku). Domyślne parametry ciasteczek pozwalają na odczytanie
        informacji w nich zawartych jedynie serwerowi, który je utworzył.
        Ciasteczka są stosowane najczęściej w przypadku liczników, sond, sklepów
        internetowych, stron wymagających logowania, reklam i do monitorowania
        aktywności odwiedzających. Pliki cookies nie zawierają danych osobowych.
      </p>
      <div className="cookies__container__paragraph">
        Wykorzystujemy pliki cookies w celu:
        <ul>
          <li>dostosowanie serwisu do preferencji użytkowników,</li>
          <li>
            pozyskiwania anonimowych danych dotyczących sposobu, w jaki
            użytkownicy korzystają z serwisu,{" "}
          </li>
          <li>
            ułatwienia użytkownikom poruszania się po stronach serwisu i
            korzystania z niego
          </li>
          <li>zapewnienia standardów bezpieczeństwa Czytelników</li>
        </ul>
      </div>
      <p className="cookies__container__paragraph">
        Stosujemy pliki cookies „stałe” oraz „sesyjne”. Pliki cookies „stałe”
        pozostają w przeglądarce internetowej urządzenia do czasu ich usunięcia
        przez użytkownika bądź do z góry ustalonego czasu określonego w
        parametrach pliku cookies. “Sesyjne” pliki cookies pozostają w
        przeglądarce do momentu jej wyłączenia lub wylogowania się ze strony
        internetowej na której zostały zamieszczone.
      </p>
      <div className="cookies__container__paragraph">
        Pliki cookies wykorzystywane są również przez podmiot współpracujący z
        kuchnianaobcasach.com.pl – Google Inc. Wykorzystujemy usługi Google
        Analytics, które legitymują się własną polityką prywatności:
        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy?hl=pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polityka prywatności Google Analytics
            </a>
          </li>
        </ul>
      </div>
      <p className="cookies__container__paragraph">
        Wszystkie nowoczesne przeglądarki pozwalają na włączenie bądź wyłączenie
        mechanizmu ciasteczek (domyślnie zazwyczaj jest on włączony). Jeśli
        użytkownik nie chce otrzymywać plików cookie, może zmienić ustawienia
        swojej przeglądarki internetowej. Zablokowanie lub ograniczenie
        stosowania plików cookies może wpłynąć na niektóre funkcjonalności
        bloga.
      </p>
      </div>
    </section>
  );
};

export default Cookies;
