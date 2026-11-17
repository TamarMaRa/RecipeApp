import { useContext } from "react";
import RecipeItem from "./RecipeItem";
import "./RecipesList.css";
import RecipeContext from "../../store/recipe-Context ";

const RecipesList = () => {
  const recipeCtx = useContext(RecipeContext);

  return (
    <ul className="recipes-list">
      {recipeCtx.recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          src={recipe.src}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
