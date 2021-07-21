import { Hero } from "../model/Hero";
import "./HeroList.css";

type propType = {
  heroList: Hero[];
  selectedHeroes: Hero[];
  setSelectedHeroes: React.Dispatch<React.SetStateAction<Hero[]>>;
};

const HeroList: React.FC<propType> = ({
  heroList,
  selectedHeroes,
  setSelectedHeroes,
}) => {
  const selectHero = (checked: boolean, hero: Hero) => {
    if (checked && selectedHeroes.length <= 1) {
      setSelectedHeroes([...selectedHeroes, { ...hero, checked: true }]);
    } else {
      setSelectedHeroes(
        selectedHeroes.filter((selectedHero) => selectedHero.id !== hero.id)
      );
    }
  };

  return (
    <ul className="heroes-list">
      {heroList?.map((hero) => (
        <li key={hero.id}>
          {hero.name}

          <input
            checked={selectedHeroes.some(
              (selectedHeroes) => selectedHeroes.id === hero.id
            )}
            onChange={(evt) => selectHero(evt.target.checked, hero)}
            type="checkbox"
            disabled={
              selectedHeroes.length === 2 &&
              !selectedHeroes.some((selected) => selected.name === hero.name)
            }
          />
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
