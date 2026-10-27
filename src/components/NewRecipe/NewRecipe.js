import "./NewRecipe.css";
import RecipeImage from "./RecipeImage";

const NewRecipe = (props) => {

  const saveRecipe = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    // props.onAddRecipe(recipeData);
  };

  return (
    <div className="sidebar">
      <h2>New recipe</h2>
      <input id="input-title" placeholder="Add recipe title" />
      <RecipeImage />
      <button type="submit" onClick={saveRecipe}>
        Add Recipe
      </button>
    </div>
  );
};

export default NewRecipe;
