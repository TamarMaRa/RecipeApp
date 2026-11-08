import Card from "../UI/Card";
import "./RecipeItem.css";

const RecipeItem = (props) => {
  return (
    <li>
      <Card className="recipe-item">
        <div>
          <h2 className="recipe-item-title">{props.title}</h2>
          {props.src && (
            <div className="recipe-item-image-container">
              <img
                src={props.src}
                alt="recipe-image"
                className="recipe-item-image"
              />
            </div>
          )}
          <div className="recipe-card-content">
            <div className="recipe-card-content-item">
              <h4>Ingredients</h4>
              <ul>
                {props.ingredient.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Instructions</h4>
              <ol>
                {props.instruction.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default RecipeItem;
