import React from "react";

const SocialMedia = ({ className }) => {
  return (
    <>
      <a
        href="https://www.facebook.com/Kuchnia-na-Obcasach-493976237282868/"
        rel="noopener noreferrer"
        target="_blank"
        className={className}
        aria-label="Facebook"
      >
        <i className="icon-facebook"></i>
      </a>
      <a
        href="https://twitter.com/Knaobcasach"
        className={className}
        aria-label="Twitter"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="icon-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/kuchnia_na_obcasach/"
        rel="noopener noreferrer"
        target="_blank"
        className={className}
        aria-label="Instagram"
      >
        <i className="icon-instagram"></i>
      </a>
      <a
        href="https://pl.pinterest.com/KuchniaObcasach/"
        rel="noopener noreferrer"
        target="_blank"
        className={className}
        aria-label="Pinterest"
      >
        <i className="icon-pinterest"></i>
      </a>
      <a
        href="mailto:monika.kuchnianaobcasach@gmail.com"
        className={className}
        aria-label="E-mail"
      >
        <i className="icon-mail"></i>
      </a>
    </>
  );
};

export default SocialMedia;
