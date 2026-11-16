import { useState } from "react";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";
import Button from "../UI/Button";
import ErrorMessage from "../UI/ErrorMessage";
import "./RecipeForm.css";

const RecipeForm = (props) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [src, setSrc] = useState(null);
  const [error, setError] = useState(null);
  const [formKey, setFormKey] = useState(0);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title === "") {
      setError({
        title: "Empty input field",
        message: "Please fill out a title",
      });
      return;
    }

    if (ingredients.length === 0 || instructions.length === 0) {
      setError({
        title: "Empty input field",
        message: "Recipe must have at least one ingredient and one instruction",
      });
      return;
    }

    const recipeData = {
      title,
      ingredients,
      instructions,
      src,
    };

    props.onSaveRecipeData(recipeData);

    setTitle("");
    setIngredients([]);
    setInstructions([]);
    setSrc(null);
    setFormKey((prev) => prev + 1);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorMessage
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <h2>Add A New Recipe</h2>
        <input
          placeholder="Add recipe title"
          className="input-title"
          maxLength="25"
          value={title}
          onChange={titleChangeHandler}
        />

        <RecipeImage file={src} setFile={setSrc} />

        <div className="info-title-container">
          <h3>Ingredients</h3>
          <h3>Instructions</h3>
        </div>

        <div className="recipe-info-container">
          <RecipeInfo
            key={`Ingredient-${formKey}`}
            title="Ingredients"
            placeholder="Ingredient"
            onChange={setIngredients}
          />
          <RecipeInfo
            key={`Instruction-${formKey}`}
            title="Instructions"
            placeholder="Step"
            onChange={setInstructions}
          />
        </div>

        <div className="submit-form">
          <Button type="submit">Add Recipe</Button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
