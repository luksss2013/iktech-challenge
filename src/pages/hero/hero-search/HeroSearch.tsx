import React, { useState } from "react";
import { Hero } from "../model/Hero";
import "./HeroSearch.css";

const API_SEARCH_ENDPOINT =
  "https://superheroapi.com/api/1361766727553917/search/";

type propType = {
  setHeroList: React.Dispatch<React.SetStateAction<Hero[]>>;
};

const HeroSearch: React.FC<propType> = ({ setHeroList }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const onHeroSearch = () => {
    const searchItemLocalStorage = localStorage.getItem("searchHistory");
    const storedNames = JSON.parse(searchItemLocalStorage!);

    if (searchItemLocalStorage) {
      localStorage.setItem(
        "searchHistory",
        JSON.stringify([...storedNames, searchValue])
      );
    } else {
      localStorage.setItem("searchHistory", JSON.stringify([searchValue]));
    }

    fetchHeroData();
  };

  const fetchHeroData = () => {
    fetch(`${API_SEARCH_ENDPOINT}${searchValue}`)
      .then((response) => response.json())
      .then((json) => {
        setHeroList(json.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero-search">
      <input
        type="text"
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.currentTarget.value)}
        placeholder="Search hero name"
      />

      <button onClick={onHeroSearch} disabled={searchValue.length === 0}>
        Search
      </button>
    </div>
  );
};

export default HeroSearch;
