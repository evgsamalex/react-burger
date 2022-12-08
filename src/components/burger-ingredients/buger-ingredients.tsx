import React, {FC, ReactNode} from 'react';
import styles from './burger-ingredients.module.css'
import Loading from "../loading/loading";
import DisplayError from "../error/display-error";
import Tabs from "../tabs/tabs";
import BurgerIngredientsGroup from "./burger-ingredients-group";
import {isNullOrEmpty} from "../../utils/utils";
import Scroll from "../scroll/scroll";
import {useAppSelector} from "../../services/hooks";

const BurgerIngredients: FC = () => {

  const {isLoading, error, categories} = useAppSelector(store => store.ingredients)

  const result = (content: ReactNode) =>
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

  if (isNullOrEmpty(categories)) {
    return null;
  }

  return (
    <div className={styles.ingredients}>
      <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
      <Tabs categories={categories}/>
      <Scroll>
        <ul className={'list'}>
          {
            categories.map((item) => (
              <BurgerIngredientsGroup key={item.type} category={item}/>
            ))
          }
        </ul>
      </Scroll>
    </div>
  );
};

export default BurgerIngredients;
