import { useState } from "react";
import "./NewRecipe.css";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";

const RecipeForm = (props) => {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [instruction, setInstruction] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const recipeData = {
      title: title,
      ingredients: ingredient,
      instructions: instruction,
    };

    props.onSaveRecipeData(recipeData);
        console.log(recipeData);

    setTitle("");
    setIngredient("");
    setInstruction("");
    console.log(recipeData);

  };

  return (
    <form onSubmit={submitHandler}>
      <h2> Add A New Recipe</h2>
      <input
        id="input-title"
        placeholder="Add recipe title"
        className="input-title"
        onChange={titleChangeHandler}
      />
      <RecipeImage />

      <RecipeInfo
        title="Ingredients"
        placeholder="Ingredient"
        onChange={setIngredient}
      />

      <RecipeInfo
        title="Instruction"
        placeholder="Step"
        onChange={setInstruction}
      />
      <div>
        <button type="button" onClick={props.onCancel}>
          Delete
        </button>
        <button type="submit">Add Recipe</button>
      </div>
    </form>
  );
};

export default RecipeForm;
