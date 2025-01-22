import { FC } from "react";

import Home from "../../assets/ic_home.png";

import "./styles.scss";

const Nav: FC = () => {
  return (
    <div>
      {/* menu responsive */}
      <div className="nav-container">
        <div className="logo">
          <div className="logo">
            <span className="nav__recipe__span">Recipe</span>
            <span className="nav__app__span">App</span>
          </div>
          <div className="home"></div>
          <div className="home">
            <img src={Home} alt="home" />
          </div>
        </div>
      </div>

      {/* menu desktop */}
      <div className="navlarge_izquierda">
        <div className="logo">
          <span className="nav__recipe__span">Recipe</span>
          <span className="nav__app__span">App</span>
        </div>
        <div className="navlarge__nav_derecha">
          <nav className="navlarge__nav">
            <ul>
              <li>
                <span className="nav__home__span">Home</span>
              </li>
              <li>
                <span className="texto">Vegetarianos</span>
              </li>
              <li>
                <span className="texto">Platos Principales</span>
              </li>
              <li>
                <span className="texto">Tortas</span>
              </li>
              <li>
                <span className="texto">Comidas Rápidas</span>
              </li>
              <li>
                <span className="texto">Menú Niños</span>
              </li>
              <li>
                <span className="texto">Sopas</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
