import RecipeForm from "./components/NewRecipe/RecipeForm";
import RecipesList from "./components/Recipes/RecipesList";
import RecipeProvider from "./store/recipeProvider";

const App = () => {

  return (
    <RecipeProvider>
      <RecipeForm />
      <RecipesList />
    </RecipeProvider>
  );
};

export default App;
