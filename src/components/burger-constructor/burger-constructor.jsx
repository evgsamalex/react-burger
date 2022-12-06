import React from 'react';
import styles from './burger-constructor.module.css'
import {useDispatch, useSelector} from "react-redux";
import BurgerConstructorBun from "./burger-constructor-bun";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useDrop} from "react-dnd";
import BurgerConstructorIngredients from "./burger-constructor-ingredients";
import BurgerConstructorOrder from "./burger-constructor-order";
import * as uuid from "uuid";
import {DragType} from "../../services/types/drag";

const BurgerConstructor = () => {

  const {bun, ingredients} = useSelector(store => store.burgerConstructor);

  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: DragType.INGREDIENT,
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      dispatch(burgerConstructorSlice.actions.add({...item, uuid: uuid.v4()}))
    }
  })

  const style = isHover ? styles.ingredients + ' pt-25 ' + styles.ingredients_hover : styles.ingredients + ' pt-25';

  if (!bun && ingredients.length === 0) {
    return (
      <div className={style} ref={dropTarget}>
        <div className='absolute center'>
          <h2 className='text text_type_main-medium'>Добавьте ингредиенты</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={style} ref={dropTarget}>
      <BurgerConstructorBun bun={bun} isUp={true}/>
      <BurgerConstructorIngredients ingredients={ingredients}/>
      <BurgerConstructorBun bun={bun} isUp={false}/>
      <BurgerConstructorOrder/>
    </div>
  );
};


export default BurgerConstructor;
