import { useState } from "react";
import RecipeContext from "./recipe-Context ";
import DUMMY_RECIPES from '../data/dummyRecipes';


const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(DUMMY_RECIPES);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;