import { useState } from "react";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import "./index.css";

const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "cookies",
    ingredients: [1, 2, 3],
    instructions: [1, 2, 3],
  },
  {
    id: "r2",
    title: "cake",
    ingredients: [4, 5, 6],
    instructions: [4, 5, 6],
  },
];

const App = () => {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => {
      return [recipe, ...prevRecipes];
    });
  };

  return (
    <div>
      <NewRecipe onAddRecipe={addRecipeHandler} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default App;
