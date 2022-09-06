import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from "../../utils/proptypes/ingredient";
import styles from "./burger-constructor-ingredients.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {burgerConstructorSlice} from "../../services/reducers/burgerConstructorSlice";
import {useDrag, useDrop} from "react-dnd";
import {DragType} from "../../utils/constants";

const BurgerConstructorIngredient = ({ingredient, index}) => {

  const ref = useRef(null);

  const dispatch = useDispatch();

  const removeIngredient = (index) => {
    dispatch(burgerConstructorSlice.actions.remove(index))
  }

  const [{isDragging}, drag] = useDrag(() => ({
    type: DragType.CONSTRUCTOR,
    item: {ingredient, index},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [{isHover}, drop] = useDrop({
    accept: DragType.CONSTRUCTOR,
    collect(monitor) {
      return {isHover: monitor.isOver()}
    },
    drop(item) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      dispatch(burgerConstructorSlice.actions.move({dragIndex, hoverIndex}))
    }
  })

  const style = [styles.item, 'ml-4 mr-4'];
  if (isDragging) style.push(styles.item_dragging);
  if (isHover) style.push(styles.item_hover);

  drag(drop(ref))

  return (
    <li ref={ref} className={style.join(' ')}>
      <DragIcon type="primary"/>
      <ConstructorElement text={ingredient.name} thumbnail={ingredient.image} price={ingredient.price}
                          handleClose={() => removeIngredient(index)}/>
    </li>
  );
};

BurgerConstructorIngredient.propTypes = {
  ingredient: ingredientPropTypes,
  index: PropTypes.number
};

export default BurgerConstructorIngredient;