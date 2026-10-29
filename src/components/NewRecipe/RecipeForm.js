import { useState } from "react";
import "./NewRecipe.css";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";

const RecipeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredIngredient, setEnteredIngredient] = useState([]);
  const [enteredInstruction, setEnteredInstruction] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const ingredientChangeHandler = (event) => {
    setEnteredIngredient(event.target.value);
  };
  const instructionChangeHandler = (event) => {
    setEnteredInstruction(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const recipeData = {
      title: enteredTitle,
      ingredient: enteredIngredient,
      instruction: enteredInstruction,
    };

    props.onSaveRecipeData(recipeData);
    setEnteredTitle("");
    setEnteredIngredient("");
    setEnteredInstruction("");
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
          onIngredientChange={ingredientChangeHandler}
          onInstructionhange={instructionChangeHandler}
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
