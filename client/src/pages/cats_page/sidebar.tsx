import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface INavState {
  [key: string]: string;
  feed: string;
}

const Sidebar: React.FC = function () {
  const [navState, setNavState] = useState<INavState>({ feed: 'close' });
  const changeNavVisibility: (selector: string) => void = function (selector) {
    const newState: INavState = navState;
    newState[selector] === 'close'
      ? (newState[selector] = 'open')
      : (newState[selector] = 'close');
    setNavState(newState);
  };
  return (
    <aside>
      <h2 onClick={changeNavVisibility}>Корма</h2>
      <nav>
        <ul className={`feed-navigation-${navState.feed}`}>
          <li>
            <NavLink to='/cats/wet-feed' />
          </li>
          <li>
            <NavLink to='/cats/holistic-feed' />
          </li>
          <li>
            <NavLink to='/cats/veterinary-feed' />
          </li>
          <li>
            <NavLink to='/cats/goodies' />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
