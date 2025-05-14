import { MenuItem } from '../../components/MenuItem';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');
  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  };

  console.log(menuOpened);
  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button
            className="menu__btn"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          ></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
