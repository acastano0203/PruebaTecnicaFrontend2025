import { FC } from "react";
import "./styles.scss";

interface CardProps {
  imagen: string;
  nombreReceta: string;
  calificacion: number;
  esFavorito: boolean;
  tiempo: string;
  porciones: string;
  calorias: string;
}

export const Card: FC<CardProps> = ({
  imagen,
  nombreReceta,
  calificacion,
  esFavorito,
  tiempo,
  porciones,
  calorias,
}) => {
  return (
    <div className="card-container">
      <div className="card-container__header">
        <h1>Nuevas recetas</h1>
      </div>

      <div className="card">
        <div className="card__imagen">
          <img src={imagen} alt={nombreReceta} />
        </div>

        <div className="card__contenido">
          <h3 className="card__titulo">{nombreReceta}</h3>

          <div className="card__footer">
            <div className="card__calificacion">⭐ {calificacion}</div>
            <div className="card__favorito">{esFavorito ? "❤️" : "🤍"}</div>
          </div>
        </div>

        <div className="card__hover">
          <div className="card__item">
            <span className="card__icono">⏰</span>
            <span className="card__label">Tiempo</span>
            <span className="card__valor">{tiempo}</span>
          </div>
          <div className="card__item">
            <span className="card__icono">👥</span>
            <span className="card__label">Porciones</span>
            <span className="card__valor">{porciones}</span>
          </div>
          <div className="card__item">
            <span className="card__icono">🔥</span>
            <span className="card__label">Calorías</span>
            <span className="card__valor">{calorias}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
