import { FC } from "react";
import "./styles.scss";

// Importa los íconos necesarios (asumiendo que existen en assets)
import IconoVegetariano from "../../assets/ic_vegetarianos.svg";
import IconoPrincipales from "../../assets/ic_principales.svg";
import IconoTortas from "../../assets/ic_tortas.svg";
import IconoRapida from "../../assets/ic_rapida.svg";
import IconoNinos from "../../assets/ic_menu_ninos.svg";
import IconoSopas from "../../assets/ic_sopas.svg";
import MenuCard from "../MenuCard";

const Menu: FC = () => {
  const menuSuperior = [
    { icono: IconoVegetariano, titulo: "Vegetarianos" },
    { icono: IconoPrincipales, titulo: "Principales" },
    { icono: IconoTortas, titulo: "Tortas" },
  ];

  const menuInferior = [
    { icono: IconoRapida, titulo: "Rápida" },
    { icono: IconoNinos, titulo: "Menú Niños" },
    { icono: IconoSopas, titulo: "Sopas" },
  ];

  return (
    <div className="menu-container">
      {menuSuperior.map((item, index) => (
        <MenuCard key={index} icono={item.icono} titulo={item.titulo} />
      ))}
      {menuInferior.map((item, index) => (
        <MenuCard key={index} icono={item.icono} titulo={item.titulo} />
      ))}
    </div>
  );
};

export default Menu;
