import React, {FC, useRef} from 'react';
import styles from "./burger-constructor-ingredient.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useDrag, useDrop} from "react-dnd";
import {DragType} from "../../services/types/drag";
import {TBurgerConstructorItem} from "../../services/types/data";

const BurgerConstructorIngredient: FC<{ ingredient: TBurgerConstructorItem }> = ({ingredient}) => {

  const ref = useRef(null);

  const dispatch = useDispatch();

  const removeIngredient = (index: string) => {
    dispatch(burgerConstructorSlice.actions.remove(index))
  }

  const [{isHover}, drop] = useDrop({
    accept: DragType.CONSTRUCTOR,
    drop(item: TBurgerConstructorItem) {
      const dragUuid = item.uuid;
      const hoverUuid = ingredient.uuid;

      if (dragUuid === hoverUuid) return;

      dispatch(burgerConstructorSlice.actions.move({dragUuid, hoverUuid}))
    },
    collect: monitor => ({
      isHover: monitor.isOver()
    })
  })

  const [{isDragging}, drag] = useDrag(() => ({
    type: DragType.CONSTRUCTOR,
    item: ingredient,
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  const style = [styles.item, 'ml-4 mr-4'];
  if (isDragging) style.push(styles.item_dragging);
  if (isHover) style.push(styles.item_hover);

  drop(drag(ref))

  return (
    <li ref={ref} className={style.join(' ')}>
      <DragIcon type="primary"/>
      <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price}
                          handleClose={() => removeIngredient(ingredient.uuid)}/>
    </li>
  );
};

export default BurgerConstructorIngredient;
