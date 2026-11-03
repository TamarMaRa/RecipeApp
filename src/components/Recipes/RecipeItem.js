import React from "react";

import Card from "../UI/Card";

const RecipeItem = (props) => {
  console.log(props.title);
  return (
    <li>
      <Card className="recipe-item">
        <div>
          <h2 className="recipe-item-title">{props.title}</h2>

          <div className="recipe-card-content">
            <h4>Ingredients</h4>
            <ul>
              {props.ingredient.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h4>Instructions</h4>
            <ol>
              {props.instruction.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default RecipeItem;
