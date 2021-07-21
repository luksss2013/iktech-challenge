import React, { useState } from "react";
import HeroComparison from "./hero-comparison/HeroComparison";
import "./Hero.css";
import { Hero } from "./model/Hero";
import HeroSearch from "./hero-search/HeroSearch";
import HeroList from "./hero-list/HeroList";

const HeroPage: React.FC = () => {
  const [heroList, setHeroList] = useState<Hero[]>([]);
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);

  return (
    <div className="hero">
      <HeroComparison
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
      />

      <HeroSearch setHeroList={setHeroList} />

      <HeroList
        heroList={heroList}
        selectedHeroes={selectedHeroes}
        setSelectedHeroes={setSelectedHeroes}
      />
    </div>
  );
};

export default HeroPage;
