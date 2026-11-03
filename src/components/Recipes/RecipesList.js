import React from 'react';

import RecipeItem from './RecipeItem';

const RecipesList = ({recipes}) => {

  return (
    <ul className='recipes-list'>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          title={recipe.title}
          ingredient={recipe.ingredients}
          instruction={recipe.instructions}
        />
      ))}
    </ul>
  );
};

export default RecipesList;