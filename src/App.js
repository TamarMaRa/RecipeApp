import { useState } from "react";
import "./index.css";
import NewRecipe from "./components/NewRecipe/NewRecipe";

const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "cookies",
    ingredient: [1,2,3],
    instruction: [1,2,3],
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
      <div className="sm">recipe</div>
    </div>
  );
};

export default App;
