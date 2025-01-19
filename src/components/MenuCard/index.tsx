import { FC } from "react";
import "./styles.scss";

interface MenuCardProps {
  icono?: string;
  titulo?: string;
}

const MenuCard: FC<MenuCardProps> = ({ icono, titulo }) => {
  return (
    <div className="menuCard">
      <img src={icono} alt={titulo} />
      <p>{titulo}</p>
    </div>
  );
};

export default MenuCard;
