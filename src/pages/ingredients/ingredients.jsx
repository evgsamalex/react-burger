import React from 'react';
import PageContent from "../../components/page-content/page-content";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

const Ingredients = () => {
  return (
    <PageContent>
      <div className='absolute center columns'>
        <h1 className='text text_type_main-large text_color_primary'>Детали ингредиента</h1>
        <IngredientDetails/>
      </div>
    </PageContent>
  );
};

export default Ingredients;
