import { FC } from "react";

import Home from "../../assets/ic_home.png";

import "./styles.scss";

const Nav: FC = () => {
  return (
    <div>
      {/* menu responsive */}
      <div className="nav-container">
        <nav>
          <ul>
            <li className="ilLogo">
              <p>
                <span className="nav__recipe__span">Recipe</span>
                <span className="nav__app__span">App</span>
              </p>
            </li>
            <li className="ilHome">
              <img src={Home} alt="home" />
            </li>
          </ul>
        </nav>
      </div>
      {/* menu desktop */}
      <div className="navlarge">
        <p className="ilLogo">
          <span className="nav__recipe__span">Recipe</span>
          <span className="nav__app__span">App</span>
        </p>
        <nav className="navlarge__nav">
          <ul>
            <li>
              <p className="texto">
                <span className="nav__home__span">Home</span>
              </p>
            </li>
            <li>
              <p className="texto">Vegetarianos</p>
            </li>
            <li>
              <p className="texto">Platos Principales</p>
            </li>
            <li>
              <p className="texto">Tortas</p>
            </li>
            <li>
              <p className="texto">Comidas Rápidas</p>
            </li>
            <li>
              <p className="texto">Menú Niños</p>
            </li>
            <li>
              <p className="texto">Sopas</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
