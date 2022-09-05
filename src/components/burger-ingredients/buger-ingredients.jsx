import React, {useEffect} from 'react';
import styles from './burger-ingredients.module.css'
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../loading/loading";
import {fetchIngredients} from "../../services/actions/fetchIngredients";
import DisplayError from "../error/display-error";
import Tabs from "../tabs/tabs";
import BurgerIngredientsGroup from "./burger-ingredients-group";
import {ingredientsSlice} from "../../services/reducers/ingredientsSlice";

const BurgerIngredients = () => {

  const {isLoading, error, categories} = useSelector(store => store.ingredients)

  const {ingredientDetails} = useSelector(state => state.ingredients)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

  const result = (content) =>
    (
      <div className={styles.ingredients}>
        {content}
      </div>
    )

  if (isLoading) {
    return result(<Loading absolute={true}/>)
  }

  if (error) {
    return result(<DisplayError error={error} absolute={true}/>)
  }

  return (
    <div className={styles.ingredients}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <Tabs categories={categories}/>
      <div className={styles.container}>
        <ul className={styles.container__ingredients}>
          {
            categories.map((item) => (
              <BurgerIngredientsGroup key={item.type} category={item}/>
            ))
          }
        </ul>
      </div>
      {
        ingredientDetails &&
        <Modal
          onClose={() => dispatch(ingredientsSlice.actions.hideDetails())}
          title='Детали ингредиента'
        >
          <IngredientDetails ingredient={ingredientDetails}/>
        </Modal>
      }
    </div>
  );
};

export default BurgerIngredients;
