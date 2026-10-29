import { useState } from "react";
import "./NewRecipe.css";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";

const RecipeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredIngredient, setEnteredIngredient] = useState([
    { id: 1, value: "" },
  ]);
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
      ingredients: enteredIngredient,
      instructions: enteredInstruction,
    };

    props.onSaveRecipeData(recipeData);
    setEnteredTitle("");
    setEnteredIngredient([{ id: 1, value: "" }]);
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
        ingredients={enteredIngredient}
        setIngredient={setEnteredIngredient}
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
