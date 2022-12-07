import React, {FC} from 'react';
import styles from './burger-constructor.module.css'
import {useDispatch} from "react-redux";
import BurgerConstructorBun from "./burger-constructor-bun";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useDrop} from "react-dnd";
import BurgerConstructorIngredients from "./burger-constructor-ingredients";
import BurgerConstructorOrder from "./burger-constructor-order";
import * as uuid from "uuid";
import {DragType} from "../../services/types/drag";
import {useAppSelector} from "../../services/hooks";
import {TBurgerConstructorItem} from "../../services/types/data";

const BurgerConstructor: FC = () => {

  const {bun, ingredients} = useAppSelector(store => store.burgerConstructor);

  const dispatch = useDispatch();

  const [{isHover}, dropTarget] = useDrop({
    accept: DragType.INGREDIENT,
    drop(item: TBurgerConstructorItem) {
      dispatch(burgerConstructorSlice.actions.add({...item, uuid: uuid.v4()}))
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  const style = isHover ? styles.ingredients + ' pt-25 ' + styles.ingredients_hover : styles.ingredients + ' pt-25';

  if (!bun) {
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
