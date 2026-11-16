import RecipeItem from "./RecipeItem";
import "./RecipesList.css";

const RecipesList = (props) => {
  return (
    <ul className="recipes-list">
      {props.recipes.map((recipe) => (
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
