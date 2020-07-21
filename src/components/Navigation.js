import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Search from "./Search";
import SocialMedia from "./SocialMedia";
import { API } from "../data";

const Navigation = () => {
  const navTop = useRef();
  const navTopOpen = useRef();
  const navBottom = useRef();
  const navBottomHamburger = useRef();
  const navBottomCategories = useRef();

  const [data, setData] = useState({
    categories: [],
    isLoading: true,
    countCategories: 0,
  });

  const loadCategories = async () => {
    let ENDPOINT = `${API}categories`;

    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) {
        return;
      }

      setData({
        categories: await response.json(),
        isLoading: false,
        countCategories: response.headers.get("X-WP-Total"),
      });
    } catch {
      return;
    }
  };

  const handleTopBar = () => {
    navTop.current.classList.toggle("reset-translate");
    navTopOpen.current.classList.toggle("rotate-180");
  };

  const handleHamburger = () => {
    navBottom.current.classList.toggle("reset-translate");
    navBottomHamburger.current.classList.toggle("hamburger-transform");
  };

  const handleCategories = () => {
    navBottomCategories.current.classList.toggle("show-categories");
  };

  const handleClick = () => {
    const BREAKPOINT = 650;

    if (window.innerWidth <= BREAKPOINT) {
      navBottomCategories.current.classList.contains("show-categories") &&
        handleCategories();
      handleHamburger();
    }
  };

  useEffect(() => {
    loadCategories();
  }, [])

  return (
    <nav className="navigation">
      <div className="navigation__top" ref={navTop}>
        <div className="navigation__top__media">
          <SocialMedia className={"navigation__top__media__link"} />
        </div>

        <div className="navigation__top__search">
          <Search handleTopBar={handleTopBar} />
        </div>

        <button
          aria-label="Otwórz"
          className="navigation__top__open"
          onClick={handleTopBar}
          ref={navTopOpen}
        >
          <i className="icon-menu-arrow"></i>
        </button>
      </div>

      <div className="navigation__center">
        <Link to="/" className="navigation__center__link">
          <img
            src={logo}
            alt="Kuchnia na obcasach"
            title="Kuchnia na obcasach"
          />
        </Link>
      </div>

      <div className="navigation__bottom">
        <button
          aria-label="Otwórz menu"
          className="navigation__bottom__hamburger"
          onClick={handleHamburger}
          ref={navBottomHamburger}
        ></button>

        <ul className="navigation__bottom__menu" ref={navBottom}>
          <li className="navigation__bottom__menu__item" onClick={handleClick}>
            <NavLink exact to="/" className="navigation__bottom__menu__item__link" activeClassName="active">
              Strona główna
            </NavLink>
          </li>
          <li className="navigation__bottom__menu__item">
            <Link
              to="#"
              className="navigation__bottom__menu__item__link"
              onClick={handleCategories}
            >
              Kategorie
            </Link>
            <ul
              className="navigation__bottom__menu__item__categories"
              ref={navBottomCategories}
              onClick={handleClick}
            >
              {data.categories.length > 0 &&
                data.categories.map(({ id, name, slug }) => {
                  if (slug === "bez-kategorii") return null;
                  return (
                    <li
                      className="navigation__bottom__menu__item__categories__item"
                      key={id}
                    >
                      <NavLink
                        exact
                        activeClassName="active"
                        to={`/kategorie/${slug}`}
                        className="navigation__bottom__menu__item__categories__item__link"
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </li>
          <li className="navigation__bottom__menu__item">
            <NavLink
              exact
              activeClassName="active"
              to="/o-mnie"
              className="navigation__bottom__menu__item__link"
              onClick={handleClick}
            >
              O mnie
            </NavLink>
          </li>
          <li className="navigation__bottom__menu__item">
            <NavLink
              exact
              activeClassName="active"
              to="/kontakt-i-wspolpraca"
              className="navigation__bottom__menu__item__link"
              onClick={handleClick}
            >
              Kontakt i współpraca
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
