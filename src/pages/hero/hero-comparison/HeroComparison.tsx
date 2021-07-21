import React from "react";
import { Hero } from "../model/Hero";
import "./HeroComparison.css";

type propTypes = {
  selectedHeroes: Hero[];
  setSelectedHeroes: React.Dispatch<React.SetStateAction<Hero[]>>;
};

const HeroComparison: React.FC<propTypes> = ({
  selectedHeroes,
  setSelectedHeroes,
}) => {
  const firstSelectedHero = selectedHeroes[0];
  const secondSelectedHero = selectedHeroes[1];

  const renderHeroProperty = (
    name: string,
    firstProperty: string,
    secondProperty: string
  ) => (
    <div className="hero-property">
      {firstProperty ? <span>{firstProperty}</span> : null}
      <span>{name}</span>
      {secondProperty ? <span>{secondProperty}</span> : null}
    </div>
  );

  return (
    <>
      {firstSelectedHero ? (
        <div className="hero-comparison">
          <div className="hero-card">
            <h2>{firstSelectedHero.name}</h2>
            <img
              src={firstSelectedHero.image.url}
              width="200"
              alt="Hero"
            />
          </div>

          <div className="hero-properties">
            <button onClick={() => setSelectedHeroes([])}>Reset</button>
            {renderHeroProperty(
              "Height",
              firstSelectedHero.appearance.height[1],
              secondSelectedHero?.appearance.height[1]
            )}
            {renderHeroProperty(
              "Weight",
              firstSelectedHero.appearance.weight[1],
              secondSelectedHero?.appearance.weight[1]
            )}
            {renderHeroProperty(
              "Gender",
              firstSelectedHero.appearance.gender,
              secondSelectedHero?.appearance.gender
            )}
            {renderHeroProperty(
              "Combat",
              firstSelectedHero.powerstats.combat,
              secondSelectedHero?.powerstats.combat
            )}
            {renderHeroProperty(
              "Durability",
              firstSelectedHero.powerstats.durability,
              secondSelectedHero?.powerstats.durability
            )}
            {renderHeroProperty(
              "Intelligence",
              firstSelectedHero.powerstats.intelligence,
              secondSelectedHero?.powerstats.intelligence
            )}
            {renderHeroProperty(
              "Power",
              firstSelectedHero.powerstats.power,
              secondSelectedHero?.powerstats.power
            )}
            {renderHeroProperty(
              "Speed",
              firstSelectedHero.powerstats.speed,
              secondSelectedHero?.powerstats.speed
            )}
            {renderHeroProperty(
              "Strength",
              firstSelectedHero.powerstats.strength,
              secondSelectedHero?.powerstats.strength
            )}
          </div>

          <div className="hero-card">
            {secondSelectedHero ? (
              <>
                <h2>{secondSelectedHero.name}</h2>
                <img
                  src={secondSelectedHero.image.url}
                  width="200"
                  alt="Hero"
                />
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeroComparison;
