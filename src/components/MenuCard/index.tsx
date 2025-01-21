import { FC } from "react";
import "./styles.scss";

interface MenuCardProps {
  icono?: string;
  titulo?: string;
}

const MenuCard: FC<MenuCardProps> = ({ icono, titulo }) => {
  return (
    <div className="menuCard">
      <img className="menuCard__icono" src={icono} alt={icono} />
      <p>{titulo}</p>
    </div>
  );
};

export default MenuCard;
