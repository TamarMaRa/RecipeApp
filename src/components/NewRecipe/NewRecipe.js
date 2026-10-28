import "./NewRecipe.css";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo"

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
      <h2> Add A New Recipe</h2>
      <input id="input-title" placeholder="Add recipe title" className="input-title"/>
      <RecipeImage />
      <RecipeInfo/>
      <button type="submit" onClick={saveRecipe}>
        Add Recipe
      </button>
    </div>
  );
};

export default NewRecipe;
