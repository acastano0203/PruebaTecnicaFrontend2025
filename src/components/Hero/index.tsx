import { FC } from "react";

import "./styles.scss";

const Hero: FC = () => {
  return (
    <div className="hero">
      <h1 className="hero__recipes">
        <span>Recetas</span>
      </h1>
      <h1 className="hero__people">
        <span>para todos</span>
      </h1>
    </div>
  );
};

export default Hero;
