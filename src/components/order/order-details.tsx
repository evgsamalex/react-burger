import React, {FC} from 'react';
import {ingredientsSelector, toOrderDate, toOrderStatus} from "./lib";
import css from './order-details.module.css'
import IngredientImage from "./ingredient-image";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {TOrder} from "../../services/types/data";
import {useAppSelector} from "../../services/hooks";

const OrderDetails: FC<{ order: TOrder }> = ({order}) => {

  const ingredients = useAppSelector(ingredientsSelector(order.ingredients));

  return (
    <div className={css.order__details}>
      <h1 className={'text text_type_digits-default text_color_primary flex-center'}>#{order.number}</h1>
      <h2 className={'text text_type_main-medium text_color_primary mt-10'}>{order.name}</h2>
      <span className={'text text_type_main-default text_color_success mt-3'}>{toOrderStatus(order.status)}</span>
      <h3 className={'text text_type_main-medium text_color_primary mt-10 mb-6'}>Состав:</h3>
      <ul className={css.ingredients}>
        {Object.values(ingredients.ingredients).map(item => (
          <li key={item.ingredient._id} className={css.ingredient + ' mr-6'}>
            <IngredientImage image={item.ingredient.image} name={item.ingredient.name}/>
            <span
              className={css.ingredient__name + ' text text_type_main-default text_color_primary'}>{item.ingredient.name}</span>
            <span
              className={css.ingredient__price + ' text text_type_digits-default'}>{item.count} x {item.ingredient.price}
              <CurrencyIcon type="primary"/>
            </span>
          </li>
        ))}
      </ul>
      <div className={css.ingredient__footer + ' mt-10'}>
        <span className={'text text_type_main-small text_color_inactive'}>{toOrderDate(order.createdAt)}</span>
        <span className={css.ingredient__price + ' text text_type_digits-default text_color_primary'}>
            {ingredients.totalPrice} <CurrencyIcon type="primary"/>
          </span>
      </div>
    </div>
  );
};

export default OrderDetails;
