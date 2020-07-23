import React from "react";
import { Link } from "react-router-dom";

const CookiesAlert = ({ handleCookies }) => {
  return (
    <div className="cookiesAlert">
      <p className="cookiesAlert__text">
        Serwis wykorzystuje pliki cookies, aby zapewnić usługi na najwyższym
        poziomie. Korzystając ze strony wyrażasz zgodę na ich użycie
      </p>
      <div>
        <button className="cookiesAlert__ok" onClick={handleCookies}>
          Ok, zgadzam się
        </button>
        <Link to="/polityka-plikow-cookies" className="cookiesAlert__more">
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
};

export default CookiesAlert;
