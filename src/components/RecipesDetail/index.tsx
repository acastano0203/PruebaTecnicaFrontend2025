import { FC, useContext } from "react";
import { Context } from "../../context";
import "./styles.scss";
import { XMarkIcon } from "@heroicons/react/24/solid";

const RecipesDetail: FC = () => {
  const context = useContext(Context);

  console.log("context.isRecipesOpen", context.isRecipesOpen);

  return (
    <aside className={`${context.isRecipesOpen ? "detail" : "hidden"}`}>
      <div className="recipe-detail__header">
        <h1>recipes Detail</h1>
        <div>
          <XMarkIcon
            className="recipe-detail__header__icon"
            onClick={() => {
              context?.closeRecipesDetail?.();
            }}
          />
        </div>
      </div>
      <figure className="recipe-detail__figure">
        <img
          className="recipe-detail__figure__img"
          src={context.detailRecipe?.[0]?.strMealThumb}
          alt={context.detailRecipe?.[0]?.strMeal}
        />
      </figure>
      <h2>{context.detailRecipe?.[0]?.strMeal}</h2>
      <ul className="recipe-detail__ingredients">
        {context.detailRecipe?.[0]?.strIngredient1 && (
          <li>
            {context.detailRecipe?.[0]?.strIngredient1} -{" "}
            {context.detailRecipe?.[0]?.strMeasure1}
          </li>
        )}
        {context.detailRecipe?.[0]?.strIngredient2 && (
          <li>
            {context.detailRecipe?.[0]?.strIngredient2} -{" "}
            {context.detailRecipe?.[0]?.strMeasure2}
          </li>
        )}
        {context.detailRecipe?.[0]?.strIngredient3 && (
          <li>
            {context.detailRecipe?.[0]?.strIngredient3} -{" "}
            {context.detailRecipe?.[0]?.strMeasure3}
          </li>
        )}
        {context.detailRecipe?.[0]?.strIngredient4 && (
          <li>
            {context.detailRecipe?.[0]?.strIngredient4} -{" "}
            {context.detailRecipe?.[0]?.strMeasure4}
          </li>
        )}
        {context.detailRecipe?.[0]?.strIngredient5 && (
          <li>
            {context.detailRecipe?.[0]?.strIngredient5} -{" "}
            {context.detailRecipe?.[0]?.strMeasure5}
          </li>
        )}
      </ul>
      <div className="recipe-detail__instructions">
        <h3>Instrucciones</h3>
        <p>{context.detailRecipe?.[0]?.strInstructions}</p>
      </div>
    </aside>
  );
};

export default RecipesDetail;
