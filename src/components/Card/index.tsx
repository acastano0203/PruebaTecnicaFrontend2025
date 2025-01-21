import { FC } from "react";
import "./styles.scss";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";

interface Recipe {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
  strCategory: number;
  strArea: boolean;
}

interface CardProps {
  recipe: Recipe;
}

export const Card: FC<CardProps> = ({ recipe }) => {
  const context = useContext(Context);

  // Esta funcion se encarga de abrir el modal de la receta y setear la receta a mostrar
  const showRecipes = (recipeDetail: Recipe) => {
    context?.openRecipesDetail?.();
    context?.setDetailRecipe?.([recipeDetail]);
  };

  return (
    <div className="container">
      <div className="card" onClick={() => showRecipes(recipe)}>
        <div className="card__imagen">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <div className="card__container_title">
          <span className="card__first_title">
            {recipe.strMeal.split(" ")[0]}
          </span>
          <span className="card__second_title">
            {recipe.strMeal.split(" ").slice(1).join(" ")}
          </span>
        </div>
        <div className="card__footer">
          <div className="footer__score">
            <img className="footer__score_icon" src={star} alt={"⭐"} />
            <span className="footer__score_text">5.0</span>
          </div>

          <img className="footer__favorite_icon" src={heart} alt={"❤️"} />
        </div>
        <div className="card__hover">
          <div className="card__item">
            <span className="card__icono">👥</span>
            <span className="card__label">Tamaño de porcion</span>
            <span className="card__valor">4 raciones</span>
          </div>
          <div className="card__item">
            <span className="card__icono">⏰</span>
            <span className="card__label">Tiempo de preparación</span>
            <span className="card__valor">10 minutos</span>
          </div>

          <div className="card__item">
            <span className="card__icono">🔥</span>
            <span className="card__label">Dificultad</span>
            <span className="card__valor">fácil</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
