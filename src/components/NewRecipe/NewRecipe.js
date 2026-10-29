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

  const deleteFormHandler = () => {
    //find a way to clear all fields
  }

  return (
    <div className="sidebar">
      <RecipeForm
        onSaveRecipeData={saveRecipeDataHandler}
        onCancel={deleteFormHandler}
      />
    </div>
  );
};

export default NewRecipe;
