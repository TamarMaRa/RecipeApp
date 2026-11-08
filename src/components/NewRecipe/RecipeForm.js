import { useState } from "react";
import "./RecipeForm.css";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";
import Button from "../UI/Button";

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
      title,
      ingredients: ingredient,
      instructions: instruction,
    };

    props.onSaveRecipeData(recipeData);
    console.log(recipeData);

    setTitle("");
    setIngredient([]);
    setInstruction([]);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2> Add A New Recipe</h2>
      <input
        id="input-title"
        placeholder="Add recipe title"
        className="input-title"
        maxLength="25"
        onChange={titleChangeHandler}
      />

      <RecipeImage />

      <div className="info-title-container">
        <h3>Ingredients</h3>
        <h3>Instruction</h3>
      </div>

      <div className="recipe-info-container">
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
      </div>

      <div className="submit-form">
        <Button type="submit">Add Recipe</Button>
      </div>
    </form>
  );
};

export default RecipeForm;
