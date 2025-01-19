import { FC } from "react";

import Home from "../../assets/ic_home.png";

import "./styles.scss";

const Nav: FC = () => {
  return (
    <div>
      <div className="nav-container">
        <nav className="nav">
          <ul>
            <li>
              <img src={Home} alt="Logo" />
            </li>
            <li>
              <img src={Home} alt="home" />
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav className="navlarge">
          <figure>
            <img src={Home} alt="home" />
          </figure>
          <ul>
            <li>
              <p className="texto">Home</p>
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
