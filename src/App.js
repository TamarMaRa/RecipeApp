import { useState } from "react";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import "./index.css";

const DUMMY_RECIPES = [
  {
    id: "r1",
    title: "cookies",
    ingredients: [
      "1 cup white sugar",
      "1/2 cup unsalted butter,",
      "2 teaspoons vanilla extract",
    ],
    instructions: [
      "Preheat the oven to 350 degrees",
      "Beat sugar and butter together",
      "Whisk flour, baking powder, and salt in a separate bowl",
    ],
  },
  {
    id: "r2",
    title: "cake",
    ingredients: [1, 2, 3],
    instructions: ["a", "b", "c"],
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
