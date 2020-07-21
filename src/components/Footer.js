import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        <span>© 2020 Kuchnia na obcasach.</span>
        <span className="footer__media">
        <SocialMedia className={"footer__media__link"} />
      </span>
        <span>Projekt i realizacja&nbsp;
        <a
          href="https://www.linkedin.com/in/kbuczynski/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Kbuczynski
        </a></span>
      </p>
    </footer>
  );
};

export default Footer;
