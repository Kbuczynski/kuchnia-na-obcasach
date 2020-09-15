import React, { useState, useEffect } from "react";
import { API } from "../data";
import { withRouter, Link } from "react-router-dom";

const Search = withRouter(({ history, handleTopBar }) => {
  const [tags, setTags] = useState({ tags: [], isLoading: true });
  const [value, setValue] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const searchTags = async () => {
      try {
        const response = await fetch(`${API}tags?search=${value}`);
        if (!response.ok) await setTags({ tags: [], isLoading: false });
        setTags({ tags: await response.json(), isLoading: false });
      } catch {
        await setTags({ tags: [], isLoading: false });
      }
    };

    value.length > 0 && searchTags();
    value.length === 0 && setTags({ tags: [], isLoading: true })

    return () => {
      setTags({ tags: [], isLoading: true })
    }
  }, [value]);

  const handleInput = (e) => {
    setValue(e.target.value);
    tags.tags.length > 0 && handleSearch();
  };

  const handleSearch = () => {
    setLink(tags.tags[0].slug);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTopBar();
    link.length > 0 && history.push(`/tagi/${link}`);
    setValue("");
    e.target.reset();
  };

  const handleLink = () => {
    handleTopBar();
    setValue("");
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="search" className="search__label">Wyszukaj</label>
      <div className="search__box">
      <input
        id="search"
        type="text"
        placeholder="Wyszukaj przepis"
        className="search__box__input"
        value={value}
        onChange={handleInput}
        autoComplete="off"
      />
      <div className="search__box__tips">
        {tags.tags.length > 0 && tags.tags.map(({name, slug}, index) => {
          return <Link to={`/tagi/${slug}`} key={index} onClick={handleLink}>{name}</Link>
        })}
      </div>
      </div>

      <button
        type="submit"
        className="search__button"
        aria-label="Szukaj"
      >
        <i className="icon-search"></i>
      </button>
    </form>
  );
});

export default Search;
