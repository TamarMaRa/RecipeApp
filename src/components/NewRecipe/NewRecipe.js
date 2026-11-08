import RecipeForm from "./RecipeForm";
import "./NewRecipe.css";

const NewRecipe = (props) => {
  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(recipeData);
  };

  return (
    <div className="sidebar">
      <RecipeForm
        onSaveRecipeData={saveRecipeDataHandler}
      />
    </div>
  );
};

export default NewRecipe;
