import "./RecipeCard.css";

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-header">
        <h3>{recipe.name}</h3>

        <button
          className="delete-btn"
          type="button"
          onClick={() => onDelete(recipe.id)}
          aria-label={`Delete ${recipe.name}`}
        >
          ×
        </button>
      </div>

      <div className="recipe-card-content">
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h4>Instructions</h4>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
