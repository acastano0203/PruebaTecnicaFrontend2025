import { FC } from "react";

import "./styles.scss";

interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ title }) => {
  return (
    <div className="hero">
      <h1 className="">{title}</h1>
    </div>
  );
};

export default Hero;
