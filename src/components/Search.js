import React, { useState, useEffect } from "react";
import { API } from "../data";
import { withRouter } from "react-router-dom";

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
  }, [value]);

  const handleInput = (e) => {
    setValue(e.target.value);
    tags.tags.length > 0 && handleSearch();
  };

  const handleSearch = (e) => {
    setLink(tags.tags[0].slug);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTopBar();
    link.length > 0 && history.push(`/tagi/${link}`);
    setValue("");
    e.target.reset();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="search" className="search__label">Wyszukaj</label>
      <input
        id="search"
        type="text"
        placeholder="Wyszukaj po tagu"
        className="search__input"
        value={value}
        onChange={handleInput}
      />

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
