import React from 'react';
import {orderPropTypes} from "../../utils/proptypes/order";
import {ingredientsSelector, toOrderDate, toOrderStatus} from "./lib";
import css from './order-details.module.css'
import {useSelector} from "react-redux";
import IngredientImage from "./ingredient-image";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = ({order}) => {

  const {ingredients, totalPrice} = useSelector(ingredientsSelector(order.ingredients));

  return (
    <div className={css.order__details}>
      <h1 className={'text text_type_digits-default text_color_primary flex-center'}>#{order.number}</h1>
      <h2 className={'text text_type_main-medium text_color_primary mt-10'}>{order.name}</h2>
      <span className={'text text_type_main-default text_color_success mt-3'}>{toOrderStatus(order.status)}</span>
      <h3 className={'text text_type_main-medium text_color_primary mt-10 mb-6'}>Состав:</h3>
      <ul className={css.ingredients}>
        {Object.values(ingredients).map(item => (
          <li key={item.ingredient._id} className={css.ingredient + ' mr-6'}>
            <IngredientImage image={item.ingredient.image}/>
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
            {totalPrice} <CurrencyIcon type="primary"/>
          </span>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  order: orderPropTypes
};

export default OrderDetails;
