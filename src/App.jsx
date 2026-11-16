import { useState } from "react";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import DUMMY_RECIPES from "./data/dummyRecipes";

const App = () => {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => {
      return [recipe, ...prevRecipes];
    });
  };

  return (
    <>
      <NewRecipe onAddRecipe={addRecipeHandler} />
      <RecipesList recipes={recipes} />
    </>
  );
};

export default App;
