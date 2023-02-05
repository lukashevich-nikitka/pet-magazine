import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface INavState {
  [key: string]: string;
  feed: string;
  fillers: string,
  trays: string,
  toys: string,
  sunbedsAndCabins: string,
  grooming: string,
  bowlsAndDrinkers: string,
  collarsAndLeashes: string,
  carriersAndCages: string,
}

const Sidebar: React.FC = function () {
  const [navState, setNavState] = useState<INavState>(
    {
      feed: 'close',
      fillers: 'close',
      trays: 'close',
      toys: 'close',
      sunbedsAndCabins: 'close',
      grooming: 'close',
      bowlsAndDrinkers: 'close',
      collarsAndLeashes: 'close',
      carriersAndCages: 'close',
    },
  );
  const changeNavVisibility: (selector: string) => void = function (selector) {
    const newState: INavState = navState;
    newState[selector] === 'close'
      ? (newState[selector] = 'open')
      : (newState[selector] = 'close');
    setNavState(newState);
  };
  return (
    <aside>
      <h2 onClick={() => changeNavVisibility('feed')} role="presentation">Корма</h2>
      <nav className={`feed-navigation-${navState.feed}`}>
        <ul>
          <li>
            <NavLink to="/cats/wet-feed">Влажные корма</NavLink>
          </li>
          <li>
            <NavLink to="/cats/holistic-feed">Холистик корма</NavLink>
          </li>
          <li>
            <NavLink to="/cats/veterinary-feed">Ветиринарные корма</NavLink>
          </li>
          <li>
            <NavLink to="/cats/goodies">Лакомства</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('fillers')} role="presentation">Наполнители</h2>
      <nav className={`fillers-navigation-${navState.fillers}`}>
        <ul>
          <li>
            <NavLink to="/cats/fillers">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('trays')} role="presentation">Лотки</h2>
      <nav className={`trays-navigation-${navState.trays}`}>
        <ul>
          <li>
            <NavLink to="/cats/trays">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('toys')} role="presentation">Игрушки</h2>
      <nav className={`toys-navigation-${navState.toys}`}>
        <ul>
          <li>
            <NavLink to="/cats/toys">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('sunbedsAndCabins')} role="presentation">Лежаки и домики</h2>
      <nav className={`sunbeds-and-cabins-navigation-${navState.sunbedsAndCabins}`}>
        <ul>
          <li>
            <NavLink to="/cats/sunbeds-and-cabins">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('grooming')} role="presentation">Груминг</h2>
      <nav className={`grooming-navigation-${navState.grooming}`}>
        <ul>
          <li>
            <NavLink to="/cats/grooming">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('bowlsAndDrinkers')} role="presentation">Миски и поилки</h2>
      <nav className={`bowls-and-drinkers-navigation-${navState.bowlsAndDrinkers}`}>
        <ul>
          <li>
            <NavLink to="/cats/bowls-and-drinkers">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('collarsAndLeashes')} role="presentation">Ошейники и поводки</h2>
      <nav className={`collars-and-leashes-navigation-${navState.collarsAndLeashes}`}>
        <ul>
          <li>
            <NavLink to="/cats/collars-and-leashes">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
      <h2 onClick={() => changeNavVisibility('carriersAndCages')} role="presentation">Переноски и клетки</h2>
      <nav className={`carriers-and-cages-navigation-${navState.carriersAndCages}`}>
        <ul>
          <li>
            <NavLink to="/cats/carriers-and-cages">Нет в наличии</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
