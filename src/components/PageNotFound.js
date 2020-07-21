import React from "react";
import notFoundImg from "../assets/404.jpg";

const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <div className="pageNotFound__container">
        <img
          src={notFoundImg}
          alt="Szukana strona nie istnieje kod błędu 404"
        />
      </div>
    </section>
  );
};

export default PageNotFound;
