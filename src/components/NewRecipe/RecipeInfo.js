import { useRef } from "react";
import "./RecipeInfo.css";

const RecipeInfo = (props) => {
  const nextId = useRef(2);
  //   const [instructions, setInstructions] = useState([]);

  const handleIngredientChange = (id, value) => {
    props.setIngredient((prev) => {
      const index = prev.findIndex((ingredient) => ingredient.id === id);

      if (value === "" && index !== prev.length - 1) {
        return prev.filter((ingredient) => ingredient.id !== id);
      }

      let updated = prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, value } : ingredient,
      );

      const lastIngredient = updated[updated.length - 1];
      if (lastIngredient.value.trim() !== "") {
        updated.push({
          id: nextId.current++,
          value: "",
        });
      }
      return updated;
    });
  };

  return (
    <div className="recipe-info-container">
      <div id="ingredients">
        <h3>ingredients list</h3>
        {props.ingredients.map((ingredient, index) => (
          <input
            key={ingredient.id}
            type="text"
            placeholder={`Ingredient ${index + 1}`}
            value={ingredient.value}
            className="input-ingredient"
            onChange={(event) =>
              handleIngredientChange(ingredient.id, event.target.value)
            }
          />
        ))}
      </div>
      {/* <div id="instructions">
        <h3>instructions list</h3>
        {props.instructions.map((instructions, index) => (
          <input
            key={instructions.id}
            type="text"
            placeholder={`Instruction ${index + 1}`}
            value={instructions.value}
            className="input-instruction"
            onChange={(event) =>
              handleIngredientChange(instructions.id, event.target.value)
            }
          />
        ))}
      </div> */}
    </div>
  );
};

export default RecipeInfo;
